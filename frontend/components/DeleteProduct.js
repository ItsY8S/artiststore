import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Router from 'next/router'
import { ALL_PRODUCTS_QUERY } from './Products'

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`

class DeleteProduct extends React.Component {
  update = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_PRODUCTS_QUERY })
    console.log(data)
    data.products = data.products.filter(
      product => product.id !== payload.data.deleteProduct.id
    )
    cache.writeQuery({ query: ALL_PRODUCTS_QUERY, data })
  }

  render() {
    return (
      <Mutation
        mutation={DELETE_PRODUCT_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteProduct, { error }) => (
          <button
            onClick={() => {
              if (confirm('Are you sure you want to delete this product?')) {
                deleteProduct().catch(err =>
                  alert("You don't have permission to delete this product.")
                )
              }
              Router.push({
                pathname: '/products'
              })
            }}
            className="inherit delete"
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    )
  }
}

export default DeleteProduct
