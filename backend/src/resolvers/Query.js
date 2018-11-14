const { forwardTo } = require('prisma-binding')

const Query = {
  products: forwardTo('db'),
  product: forwardTo('db'),
  productsConnection: forwardTo('db')
}

module.exports = Query
