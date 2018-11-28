import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import Error from './ErrorMessage'
import Link from 'next/link'
import { CURRENT_USER_QUERY } from './User'

const RESET_PASSWORD_MUTATION = gql`
  mutation RESET_PASSWORD_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      email
      name
    }
  }
`

class ResetPassword extends React.Component {
  static propTypes = {
    resetToken: PropTypes.string.isRequired
  }

  state = {
    password: '',
    confirmPassword: ''
  }

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Mutation
        mutation={RESET_PASSWORD_MUTATION}
        variables={{
          resetToken: this.props.resetToken,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
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
                    password: '',
                    confirmPassword: ''
                  })
                }}
              >
                <h2 className="mb-50">Reset Your Password</h2>
                <div className="white">&nbsp;</div>
                <div className="input-group full-width">
                  <input
                    className="full-width"
                    type="password"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.saveToState}
                  />
                  <label className="text-black" htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="input-group full-width">
                  <input
                    className="full-width"
                    type="password"
                    name="confirmPassword"
                    required
                    value={this.state.confirmPassword}
                    onChange={this.saveToState}
                  />
                  <label className="text-black" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                </div>
                <button className="gradient btn" type="submit">
                  Reset
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

export default ResetPassword
