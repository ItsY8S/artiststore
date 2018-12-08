import React from 'react'
import formatMoney from '../lib/formatMoney'
import PropTypes from 'prop-types'
import RemoveFromCart from './RemoveFromCart'

const CartProduct = ({ cartProduct }) => {
  if (!cartProduct.product)
    return (
      <div className="cart-item-unavailable">
        <p>This product is no longer available.</p>
        <RemoveFromCart id={cartProduct.id} />
      </div>
    )
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
      <RemoveFromCart id={cartProduct.id} />
    </div>
  )
}

CartProduct.propTypes = {
  cartProduct: PropTypes.object.isRequired
}

export default CartProduct