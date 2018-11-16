import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Error from './ErrorMessage'
import Link from 'next/link'

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`

class RequestReset extends React.Component {
  state = {
    email: ''
  }

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Mutation mutation={REQUEST_RESET_MUTATION} variables={this.state}>
        {(reset, { error, loading, called }) => {
          return (
            <>
              <Error error={error} />
              {!error && !loading && called && (
                <p>Success! Check your email for a reset link.</p>
              )}
              <form
                className="card"
                method="POST"
                autoComplete="off"
                onSubmit={async e => {
                  e.preventDefault()
                  await reset()
                  this.setState({
                    email: ''
                  })
                }}
              >
                <h2 className="mb-50">Password Reset</h2>
                <div className="white">&nbsp;</div>
                <div className="input-group full-width">
                  <input
                    className="full-width"
                    type="email"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.saveToState}
                  />
                  <label className="text-black" htmlFor="email">
                    Email
                  </label>
                </div>
                <button className="gradient btn" type="submit">
                  Request Reset
                </button>
                <p className="mt-25">
                  Have an account? &nbsp;
                  <Link href="/signup">
                    <a>Sign Up</a>
                  </Link>
                </p>
              </form>
            </>
          )
        }}
      </Mutation>
    )
  }
}

export default RequestReset
