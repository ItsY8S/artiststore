import React from 'react'
import { Mutation } from 'react-apollo'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { CURRENT_USER_QUERY } from './User'

const REMOVE_FROM_CART_MUTATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`

class RemoveFromCart extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  }
  render() {
    return (
      <Mutation
        mutation={REMOVE_FROM_CART_MUTATION}
        variables={{ id: this.props.id }}
      >
        {(removeFromCart, { loading, error }) => (
          <button
            onClick={() => {
              removeFromCart().catch(err => alert(err.message))
            }}
            className="cart-item-remove"
            disabled={loading}
            title="Remove Product"
          >
            &times;
          </button>
        )}
      </Mutation>
    )
  }
}

export default RemoveFromCart
