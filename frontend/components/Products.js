import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import Product from './Product'
import Link from 'next/link'
import Pagination from './Pagination'
import { perPage } from '../config'

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    products(first: $first, skip: $skip, orderBy: createdAt_DESC) {
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
      <Query
        query={ALL_PRODUCTS_QUERY}
        variables={{
          skip: this.props.page * perPage - perPage
        }}
        // fetchPolicy="network-only"
      >
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
          return (
            <>
              <ProductsGrid>
                <Link href="/productAdd">
                  <a>
                    <img src="/static/add.svg" alt="Add a Product" />
                  </a>
                </Link>
                {data.products.map(product => (
                  <Product product={product} key={product.id} />
                ))}
              </ProductsGrid>
              <Pagination page={this.props.page} />
            </>
          )
        }}
      </Query>
    )
  }
}

export default Products
export { ALL_PRODUCTS_QUERY }
