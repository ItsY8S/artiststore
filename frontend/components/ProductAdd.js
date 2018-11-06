import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import formatMoney from '../lib/formatMoney'
import Meta from './Meta'
import setAttributes from '../lib/setAttributes'
import Error from './ErrorMessage'
import Router from 'next/router'

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $title: String!
    $price: Int!
    $description: String!
    $image: String
  ) {
    createProduct(
      title: $title
      price: $price
      description: $description
      image: $image
    ) {
      id
    }
  }
`

class ProductAdd extends React.Component {
  state = {
    title: '',
    price: 0,
    description: '',
    image: ''
  }

  handleChange = e => {
    const { name, type, value } = e.target
    // console.log(e)
    const val = type === 'number' ? parseFloat(value) : value
    this.setState({ [name]: val })
  }

  handleSwapInput = e => {
    const itExists = document.querySelector('.exists')
    if (itExists == null) {
      setAttributes(e.target, {
        class: 'big-again fluid'
      })
      const productImageInput = document.createElement('input')
      setAttributes(productImageInput, {
        class: 'live-input exists product-hero',
        type: 'file',
        accept: 'image/png, image/jpeg',
        name: 'image',
        style: 'display: none',
        onchange:
          "document.getElementById('hero').src = window.URL.createObjectURL(this.files[0])"
      })
      e.target.parentNode.appendChild(productImageInput)
      productImageInput.click()
    } else {
      console.log('Still click it.')
      const productHeroInput = document.querySelector('.live-input')
      productHeroInput.click()
    }
  }

  render() {
    return (
      <Mutation mutation={CREATE_PRODUCT_MUTATION} variables={this.state}>
        {(createProduct, { loading, error }) => (
          <form
            onSubmit={async e => {
              e.preventDefault()
              const res = await createProduct()
              console.log(res)
              Router.push({
                pathname: '/product',
                query: { id: res.data.createProduct.id }
              })
            }}
          >
            <Error error={error} />
            <div className="product-details">
              <div className="product-hero">
                <img
                  id="hero"
                  className="fluid"
                  src="/static/camera-icon.svg"
                  alt="Add Product Image"
                  // onClick={this.handleSwapInput}
                  // onChange={this.handleChange}
                />
                <input
                  type="file"
                  className="live-input product-hero big-again fluid"
                  accept="image/png, image/jpeg"
                  name="image"
                  // style={{ display: 'none' }}
                  onChange={this.handleChange}
                />
              </div>
              <div className="product-info">
                <div className="title-and-price">
                  <input
                    className="product-title live-input"
                    type="text"
                    name="title"
                    placeholder="Product Title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    required
                  />
                  <input
                    className="product-price live-input"
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={this.state.price}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="product-description">
                  <textarea
                    className="autoExpand live-input"
                    name="description"
                    placeholder="Product Description"
                    rows="5"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.description}
                  />
                </div>
                <div className="product-buttons">
                  <button className="inherit">Back</button>
                  <button className="inherit save" type="submit">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Mutation>
    )
  }
}

export default ProductAdd
export { CREATE_PRODUCT_MUTATION }
