import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Mutation } from 'react-apollo'
import Router from 'next/router'
import NProgress from 'nprogress'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import calcTotalPrice from '../lib/calcTotalPrice'
import Error from './ErrorMessage'
import User, { CURRENT_USER_QUERY } from './User'

function totalItems(cart) {
  return cart.reduce((tally, cartProduct) => tally + cartProduct.quantity, 0)
}

class Stripe extends React.Component {
  onToken = res => {
    console.log(res.id)
  }

  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <StripeCheckout
            amount={calcTotalPrice(me.cart)}
            name="Artist Store"
            description={`${totalItems(me.cart)} products`}
            image={me.cart[0].product && me.cart[0].product.image}
            stripeKey="pk_test_zDi3MW9ROdbi8jgggE6M5iow"
            currency="USD"
            email={me.email}
            token={res => this.onToken(res)}
          >
            {this.props.children}
          </StripeCheckout>
        )}
      </User>
    )
  }
}

export default Stripe
