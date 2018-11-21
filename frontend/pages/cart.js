import CartStyles from '../components/styles/CartStyles'

const cart = props => {
  return (
    <CartStyles className="carts">
      <button className="close-cart">&times;</button>
      <h4 className="cart-title">User's Cart</h4>

      <div className="cart-item">
        <img
          src="/static/images/products/beige-hoodie.jpg"
          alt="Beige Hoodie"
        />
        <h6>Beige Hoodie</h6>
        <span>$49</span>
      </div>
    </CartStyles>
  )
}

export default cart
