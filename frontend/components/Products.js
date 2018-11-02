import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import Product from './Product'
import Link from 'next/link'

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
          if (error)
            return (
              <ProductsGrid>
                <Link href="/productAdd">
                  <a>
                    <img src="/static/add.svg" alt="Add a Product" />
                  </a>
                </Link>
                <p>Error: {error.message}</p>
              </ProductsGrid>
            )
          console.log(data)
          return (
            <ProductsGrid>
              <Link>
                <a>
                  <img src="/static/add.svg" alt="Add a Product" />
                </a>
              </Link>

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
export { ALL_PRODUCTS_QUERY }
