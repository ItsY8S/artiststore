import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import CartStyles from './styles/CartStyles'
import User from './User'
import CartProduct from './CartProduct'
import calcTotalPrice from '../lib/calcTotalPrice'
import formatMoney from '../lib/formatMoney'

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
  <User>
    {({ data: { me } }) => {
      if (!me) return null
      console.log('User here', me)
      return (
        <Mutation mutation={TOGGLE_CART_MUTATION}>
          {toggleCart => (
            <Query query={LOCAL_STATE_QUERY}>
              {({ data }) => (
                <CartStyles open={data.cartOpen}>
                  <header>
                    <h4 className="cart-title">{me.name}'s Cart</h4>
                    <button className="cart-close" onClick={toggleCart}>
                      &times;
                    </button>
                  </header>

                  <section className="cart-items">
                    {me.cart.map(cartProduct => (
                      <CartProduct
                        cartProduct={cartProduct}
                        key={cartProduct.id}
                      />
                    ))}

                    {/* <div className="cart-item">
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
                      <span className="cart-item-remove">&times;</span>
                    </div> */}
                  </section>

                  <footer>
                    <h4 className="cart-total">
                      {formatMoney(calcTotalPrice(me.cart))}
                      {/* <span className="cart-item-count">
                        {me.cart.length} products
                      </span> */}
                    </h4>
                    <button className="checkout">Checkout</button>
                  </footer>
                </CartStyles>
              )}
            </Query>
          )}
        </Mutation>
      )
    }}
  </User>
)

export default Cart
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION }
