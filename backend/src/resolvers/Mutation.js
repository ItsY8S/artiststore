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
  }
}

module.exports = Mutations
