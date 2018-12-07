const { forwardTo } = require('prisma-binding')
const { hasPermission } = require('../utils')

const Query = {
  products: forwardTo('db'),
  product: forwardTo('db'),
  productsConnection: forwardTo('db'),
  me(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      return null
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    )
  },
  async users(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('You must be signed in.')
    }
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE'])
    return ctx.db.query.users({}, info)
  },
  async order(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('You must log in to do this.')
    }

    const order = await ctx.db.query.order(
      {
        where: { id: args.id }
      },
      info
    )

    const ownsOrder = order.user.id === ctx.request.userId
    const hasPermissionToView = ctx.request.user.permissions.includes('ADMIN')

    if (!ownsOrder || !hasPermissionToView) {
      throw new Error(`You don't have permission to view this order.`)
    }

    return order
  },
  async orders(parent, args, ctx, info) {
    const { userId } = ctx.request
    if (!userId) {
      throw new Error('you must be signed in!')
    }
    return ctx.db.query.orders(
      {
        where: {
          user: { id: userId }
        }
      },
      info
    )
  }
}

module.exports = Query
