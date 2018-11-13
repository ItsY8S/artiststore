import React from 'react'
import { Mutation, Query } from 'react-apollo'
import gql from 'graphql-tag'
import formatMoney from '../lib/formatMoney'
import Meta from './Meta'
import setAttributes from '../lib/setAttributes'
import Error from './ErrorMessage'
import Router from 'next/router'

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    product(where: { id: $id }) {
      id
      title
      description
      price
      image
    }
  }
`

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $title: String
    $price: Int
    $description: String
    $image: String
  ) {
    updateProduct(
      id: $id
      title: $title
      price: $price
      description: $description
      image: $image
    ) {
      id
      title
      description
      image
    }
  }
`

class ProductUpdate extends React.Component {
  state = {}

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

  uploadFile = async e => {
    console.log('uploading file')
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'artiststore')

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/y8s/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()
    console.log(file)
    this.setState({
      image: file.secure_url
    })
    const hero = document.querySelector('#hero')
    hero.src = this.state.image
    hero.classList.remove('two-hundred')
  }

  updateProduct = async (e, updateProductMutation) => {
    e.preventDefault()
    console.log('updating product')
    console.log(this.state)
    const res = await updateProductMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    })
    console.log('updated')
  }

  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>
          if (!data.product)
            return <p>No product found for ID: {this.props.id}</p>
          return (
            <Mutation mutation={UPDATE_PRODUCT_MUTATION} variables={this.state}>
              {(updateProduct, { loading, error }) => (
                <form onSubmit={e => this.updateProduct(e, updateProduct)}>
                  <Error error={error} />
                  <div className="product-details">
                    <div className="product-hero">
                      <label htmlFor="file">
                        <img
                          id="hero"
                          className="fluid two-hundred"
                          src={data.product.image}
                          alt="Update Product Image"
                        />
                      </label>
                      <input
                        type="file"
                        className="live-input product-hero big-again fluid"
                        id="file"
                        accept="image/png, image/jpeg"
                        name="image"
                        style={{ display: 'none' }}
                        onChange={this.uploadFile}
                      />
                    </div>
                    <div className="product-info">
                      <div className="title-and-price">
                        <input
                          className="product-title live-input"
                          type="text"
                          name="title"
                          placeholder="Product Title"
                          defaultValue={data.product.title}
                          onChange={this.handleChange}
                          required
                        />
                        <input
                          className="product-price live-input"
                          type="number"
                          name="price"
                          placeholder="Price"
                          defaultValue={data.product.price}
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
                          defaultValue={data.product.description}
                        />
                      </div>
                      <div className="product-buttons">
                        <button className="inherit">Back</button>
                        <button className="inherit save" type="submit">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Mutation>
          )
        }}
      </Query>
    )
  }
}

export default ProductUpdate
export { UPDATE_PRODUCT_MUTATION }
