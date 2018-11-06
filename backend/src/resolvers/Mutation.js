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
  }
}

module.exports = Mutations
