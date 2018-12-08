import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { format } from 'date-fns'
import Head from 'next/head'
import gql from 'graphql-tag'
import formatMoney from '../lib/formatMoney'
import Error from './ErrorMessage'
import OrderStyles from './styles/OrderStyles'

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order(id: $id) {
      id
      charge
      total
      createdAt
      user {
        id
      }
      items {
        id
        title
        description
        price
        image
        quantity
      }
    }
  }
`

class Order extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  }

  render() {
    return (
      <Query query={SINGLE_ORDER_QUERY} variables={{ id: this.props.id }}>
        {({ data, error, loading }) => {
          if (error) return <Error error={error} />
          if (loading) return <p>Loading...</p>
          const order = data.order
          return (
            <OrderStyles>
              <Head>
                <title>Artist Store - Order {order.id}</title>
              </Head>
              <div className="order-details">
                <h4 className="fw-600">Order Details</h4>
                <p>
                  <span>Order ID:</span>
                  <span>{this.props.id}</span>
                </p>
                <p>
                  <span>Date Ordered:</span>
                  <span>
                    {format(order.createdAt, 'MMMM d, YYYY h:mm a', {
                      awareOfUnicodeTokens: true
                    })}
                  </span>
                </p>
                <p>
                  <span>Order Total:</span>
                  <span>{formatMoney(order.total)}</span>
                </p>
                <p>
                  <span>Items:</span>
                  <span>{order.items.length}</span>
                </p>
              </div>

              <div className="items">
                <h4 className="fw-600">Order Items</h4>
                {order.items.map(item => (
                  <div className="order-item" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div className="item-details">
                      <h5 className="fw-600">{item.title}</h5>
                      <p>Price: {formatMoney(item.price)}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Total: {formatMoney(item.price * item.quantity)}</p>
                      <p>Description: {item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </OrderStyles>
          )
        }}
      </Query>
    )
  }
}

export default Order
