import React from 'react'
import PropTypes from 'prop-types'
import ProductStyles from './styles/ProductStyles'
import Link from 'next/link'
import formatMoney from '../lib/formatMoney'

class Product extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  }
  render() {
    const { product } = this.props
    return (
      <ProductStyles>
        <Link
          href={{
            pathname: '/product',
            query: { id: product.id }
          }}
        >
          <a>
            {product.image && (
              <img className="image" src={product.image} alt={product.title} />
            )}
            <span className="price">{formatMoney(product.price)}</span>
          </a>
        </Link>
      </ProductStyles>
    )
  }
}

export default Product
