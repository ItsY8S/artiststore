import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import CartStyles from './styles/CartStyles'
import { adopt } from 'react-adopt'
import User from './User'
import CartProduct from './CartProduct'
import calcTotalPrice from '../lib/calcTotalPrice'
import formatMoney from '../lib/formatMoney'
import Stripe from './Stripe'

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }
`

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`

// Simplify the cart
const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  toggleCart: ({ render }) => (
    <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>
  ),
  localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>
})

const Cart = () => (
  <Composed>
    {({ user, toggleCart, localState }) => {
      const me = user.data.me
      if (!me) return null
      // console.log('User here', me)
      return (
        <CartStyles open={localState.data.cartOpen}>
          <header>
            <h4 className="cart-title">{me.name}'s Cart</h4>
            <button className="cart-close" onClick={toggleCart}>
              &times;
            </button>
          </header>

          <section className="cart-items">
            {me.cart.map(cartProduct => (
              <CartProduct cartProduct={cartProduct} key={cartProduct.id} />
            ))}
          </section>

          <footer>
            <h4 className="cart-total">
              {formatMoney(calcTotalPrice(me.cart))}
              {/* <span className="cart-item-count">
                        {me.cart.length} products
                      </span> */}
            </h4>
            <Stripe>
              <button className="checkout">Checkout</button>
            </Stripe>
          </footer>
        </CartStyles>
      )
    }}
  </Composed>
)

export default Cart
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION }
