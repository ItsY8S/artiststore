import React from 'react'
import formatMoney from '../lib/formatMoney'
import PropTypes from 'prop-types'

const CartProduct = ({ cartProduct }) => {
  return (
    <div className="cart-item">
      <img src={cartProduct.product.image} alt={cartProduct.product.title} />
      <div className="cart-item-details">
        <h6 className="cart-item-title">{cartProduct.product.title}</h6>
        <span className="cart-item-price">
          {formatMoney(cartProduct.product.price)} &times;{' '}
          <em>{cartProduct.quantity}</em>
        </span>
      </div>
      <span className="cart-item-remove">&times;</span>
    </div>
  )
}

CartProduct.propTypes = {
  cartProduct: PropTypes.object.isRequired
}

export default CartProduct
