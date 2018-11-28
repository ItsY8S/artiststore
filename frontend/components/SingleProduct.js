import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Error from './ErrorMessage'
import styled from 'styled-components'
import Head from 'next/head'
import AddToCart from './AddToCart'
import formatMoney from '../lib/formatMoney'

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    product(where: { id: $id }) {
      id
      title
      image
      price
      description
    }
  }
`
class SingleProduct extends Component {
  render() {
    return (
      <Query
        query={SINGLE_PRODUCT_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />
          if (loading) return <p>Loading...</p>
          if (!data.product)
            return <p>No Product found for ID: {this.props.id}</p>
          const product = data.product
          return (
            <div className="product-details">
              <div className="product-hero">
                <img
                  id="hero"
                  className="fluid"
                  src={product.image || '/static/camera-icon.svg'}
                  alt="Update Product Image"
                />
              </div>
              <div className="product-info">
                <div className="title-and-price">
                  <h4 className="product-title live-input">{product.title}</h4>
                  <h4 className="product-price live-input">
                    {formatMoney(product.price)}
                  </h4>
                </div>
                <div className="product-description">
                  <textarea
                    className="autoExpand live-input"
                    placeholder="Product Description"
                    type="text"
                    rows="5"
                    readOnly
                  >
                    {product.description}
                  </textarea>
                </div>
                <div className="product-buttons">
                  <button id={product.id}>Temp</button>
                  <AddToCart id={product.id} />
                </div>
              </div>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default SingleProduct
