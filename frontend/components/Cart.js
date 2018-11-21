import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import CartStyles from './styles/CartStyles'

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

const Cart = () => (
  <Mutation mutation={TOGGLE_CART_MUTATION}>
    {toggleCart => (
      <Query query={LOCAL_STATE_QUERY}>
        {({ data }) => (
          <CartStyles open={data.cartOpen}>
            <header>
              <h4 className="cart-title">User's Cart</h4>
              <button className="cart-close" onClick={toggleCart}>
                &times;
              </button>
            </header>

            <section className="cart-items">
              <div className="cart-item">
                <img
                  src="/static/images/products/beige-hoodie.jpg"
                  alt="Beige Hoodie"
                />
                <h6 className="cart-item-title">Beige Hoodie</h6>
                <span className="cart-item-price">$77</span>
              </div>

              <div className="cart-item">
                <img
                  src="/static/images/products/red-hoodie.jpg"
                  alt="Red Hoodie"
                />
                <h6 className="cart-item-title">Red Hoodie</h6>
                <span className="cart-item-price">$77</span>
              </div>
            </section>

            <footer>
              <h4 className="cart-total">$219.42</h4>
              <button className="checkout">Checkout</button>
            </footer>
          </CartStyles>
        )}
      </Query>
    )}
  </Mutation>
)

export default Cart
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION }
