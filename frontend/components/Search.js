import React from 'react'
import Downshift, { resetIdCounter } from 'downshift'
import Router from 'next/router'
import { ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'
import debounce from 'lodash.debounce'
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown'

const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    products(
      where: {
        OR: [
          { title_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
    ) {
      id
      image
      title
    }
  }
`

function routeToProduct(product) {
  Router.push({
    pathname: '/product',
    query: {
      id: product.id
    }
  })
}

class AutoComplete extends React.Component {
  state = {
    products: [],
    loading: false
  }

  onChange = debounce(async (e, client) => {
    this.setState({ loading: true })
    const res = await client.query({
      query: SEARCH_PRODUCTS_QUERY,
      variables: { searchTerm: e.target.value }
    })
    this.setState({
      products: res.data.products,
      loading: false
    })
  }, 350)

  render() {
    resetIdCounter()
    return (
      <SearchStyles>
        <Downshift
          onChange={routeToProduct}
          itemToString={product => (product === null ? '' : product.title)}
        >
          {({
            getInputProps,
            getItemProps,
            isOpen,
            inputValue,
            highlightedIndex
          }) => (
            <div>
              <ApolloConsumer>
                {client => (
                  <input
                    {...getInputProps({
                      type: 'search',
                      placeholder: 'Search...',
                      id: 'search',
                      className: this.state.products.length ? 'loading' : '',
                      onChange: e => {
                        e.persist()
                        this.onChange(e, client)
                      }
                    })}
                  />
                )}
              </ApolloConsumer>
              {isOpen && (
                <DropDown>
                  {this.state.products.map((item, index) => (
                    <DropDownItem
                      {...getItemProps({ item })}
                      key={item.id}
                      highlighted={index === highlightedIndex}
                      className={this.state.products.length ? 'addBorder' : ''}
                    >
                      <img
                        className="fluid"
                        src={item.image}
                        alt={item.title}
                      />
                      <p className="bold">{item.title}</p>
                    </DropDownItem>
                  ))}

                  {!this.state.products.length && !this.state.loading && (
                    <DropDownItem className="addBorder">
                      <span>&nbsp;</span>
                      <p>
                        No results for{' '}
                        <span className="bold">{inputValue}</span>
                      </p>
                    </DropDownItem>
                  )}
                </DropDown>
              )}
            </div>
          )}
        </Downshift>
      </SearchStyles>
    )
  }
}

export default AutoComplete
