const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { randomBytes } = require('crypto')
const { promisify } = require('util')
const { transport, styledEmail } = require('../mail')
const { hasPermission } = require('../utils')

const Mutations = {
  async createProduct(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('You must be signed in to do that.')
    }

    const product = await ctx.db.mutation.createProduct(
      {
        data: {
          user: {
            connect: {
              id: ctx.request.userId
            }
          },
          ...args
        }
      },
      info
    )
    console.log(product)
    return product
  },
  updateProduct(parent, args, ctx, info) {
    const updates = { ...args }
    delete updates.id
    return ctx.db.mutation.updateProduct(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info
    )
  },
  async deleteProduct(parent, args, ctx, info) {
    const where = { id: args.id }
    const product = await ctx.db.query.product(
      { where },
      `{ id title user { id } }`
    )
    const ownsProduct = product.user.id === ctx.request.userId
    const hasPermissions = ctx.request.user.permissions.some(permission =>
      ['ADMIN', 'PRODUCTDELETE'].includes(permission)
    )
    if (!ownsProduct && !hasPermissions) {
      throw new Error("You don't have permission to delete this product.")
    }

    return ctx.db.mutation.deleteProduct({ where }, info)
  },
  async signup(parent, args, ctx, info) {
    args.email = args.email.toLowerCase()
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ['USER'] }
        }
      },
      info
    )

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year
    })
    return user
  },
  async signin(parent, { email, password }, ctx, info) {
    const user = await ctx.db.query.user({ where: { email } })
    if (!user) {
      throw new Error(`No such user found for email ${email}`)
    }
    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid Password!')
    }
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    })
    return user
  },
  signout(parent, args, ctx, info) {
    ctx.response.clearCookie('token')
    return {
      message: 'Signed out.'
    }
  },
  async requestReset(parent, args, ctx, info) {
    const user = await ctx.db.query.user({ where: { email: args.email } })
    if (!user) {
      throw new Error(`No such user found for email ${args.email}`)
    }
    const randomBytesPromiseified = promisify(randomBytes)
    const resetToken = (await randomBytesPromiseified(20)).toString('hex')
    const resetTokenExpiry = Date.now() + 3600000 // 1 hour
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    })
    // 3. Email them that reset token
    const mailRes = await transport.sendMail({
      from: 'test@gmail.com',
      to: user.email,
      subject: 'Your Password Reset Token',
      html: styledEmail(`Your Password Reset Token is here!
      \n\n
      <a href="${
        process.env.FRONTEND_URL
      }/resetPassword?resetToken=${resetToken}">Click Here to Reset</a>`)
    })

    return { message: 'Thanks!' }
  },
  async resetPassword(parent, args, ctx, info) {
    if (args.password !== args.confirmPassword) {
      throw new Error("Passwords don't match.")
    }
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000
      }
    })
    if (!user) {
      throw new Error('This token is either invalid or expired!')
    }
    const password = await bcrypt.hash(args.password, 10)

    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null
      }
    })

    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET)

    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    })
    return updatedUser
  },
  async updatePermissions(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('You must be signed in!')
    }

    const currentUser = await ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    )

    hasPermission(currentUser, ['ADMIN', 'PERMISSIONUPDATE'])

    return ctx.db.mutation.updateUser(
      {
        data: {
          permissions: {
            set: args.permissions
          }
        },
        where: {
          id: args.userId
        }
      },
      info
    )
  },
  async addToCart(parent, args, ctx, info) {
    const { userId } = ctx.request

    if (!userId) {
      throw new Error('You must be signed in.')
    }

    const [existingCartProduct] = await ctx.db.query.cartProducts({
      where: {
        user: { id: userId },
        product: { id: args.id }
      }
    })

    if (existingCartProduct) {
      console.log('product already in cart')
      return ctx.db.mutation.updateCartProduct(
        {
          where: { id: existingCartProduct.id },
          data: { quantity: existingCartProduct.quantity + 1 }
        },
        info
      )
    }

    return ctx.db.mutation.createCartProduct(
      {
        data: {
          user: {
            connect: { id: userId }
          },
          product: {
            connect: { id: userId }
          }
        }
      },
      info
    )
  }
}

module.exports = Mutations
