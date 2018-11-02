import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import Product from './Product'

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    products {
      id
      title
      price
      description
      image
    }
  }
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
`

class Products extends React.Component {
  render() {
    return (
      <Query query={ALL_PRODUCTS_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error: {error.message}</p>
          console.log(data)
          return (
            <ProductsGrid>
              {data.products.map(product => {
                ;<div className="product">
                  <Product key={product.id} product={product} />
                </div>
              })}
            </ProductsGrid>
          )
        }}
      </Query>
    )
  }
}

export default Products
