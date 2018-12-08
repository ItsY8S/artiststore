import React from 'react'
import { Query } from 'react-apollo'
import { formatDistance } from 'date-fns'
import Link from 'next/link'
import styled from 'styled-components'
import gql from 'graphql-tag'
import formatMoney from '../lib/formatMoney'
import Error from './ErrorMessage'

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        title
        description
        price
        quantity
        image
      }
    }
  }
`

class Orders extends React.Component {
  render() {
    return (
      <Query query={USER_ORDERS_QUERY}>
        {({ data: { orders }, loading, error }) => {
          if (error) return <Error error={error} />
          if (loading) return <p>Loading...</p>
          return (
            <table className="u-full-width">
              <thead>
                <tr>
                  <th>Order Image</th>
                  <th># of Items</th>
                  <th>Date Ordered</th>
                  <th>Order Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td>
                      <Link
                        href={{
                          pathname: '/order',
                          query: { id: order.id }
                        }}
                      >
                        <a>
                          <img width="100" src={order.items[0].image} />
                        </a>
                      </Link>
                    </td>
                    <td>{order.items.reduce((a, b) => a + b.quantity, 0)} </td>
                    <td>{formatDistance(order.createdAt, new Date())}</td>
                    <td>{formatMoney(order.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        }}
      </Query>
    )
  }
}

export default Orders
