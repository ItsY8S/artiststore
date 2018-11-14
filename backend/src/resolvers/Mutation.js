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
  }
}

module.exports = Mutations
