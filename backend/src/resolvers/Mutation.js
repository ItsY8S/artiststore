const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Mutations = {
  async createProduct(parent, args, ctx, info) {
    const product = await ctx.db.mutation.createProduct(
      {
        data: {
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
    const item = await ctx.db.query.product({ where }, `{ id title }`)
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
  }
}

module.exports = Mutations
