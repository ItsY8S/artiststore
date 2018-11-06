import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import formatMoney from '../lib/formatMoney'

class Product extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  }
  render() {
    const { product } = this.props
    return (
      <div className="product">
        <Link
          href={{
            pathname: '/product',
            query: { id: product.id }
          }}
        >
          <a>
            {product.image && (
              <img
                className="image fluid"
                src={product.image}
                alt={product.title}
              />
            )}
            <span className="price">{formatMoney(product.price)}</span>
          </a>
        </Link>
      </div>
    )
  }
}

export default Product
