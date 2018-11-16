import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Error from './ErrorMessage'
import Link from 'next/link'
import { CURRENT_USER_QUERY } from './User'

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      name
      email
    }
  }
`

class Signin extends React.Component {
  state = {
    name: '',
    email: '',
    password: ''
  }

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { error, loading }) => {
          return (
            <>
              <Error error={error} />
              <form
                className="card"
                method="POST"
                autoComplete="off"
                onSubmit={async e => {
                  e.preventDefault()
                  await signin()
                  this.setState({
                    name: '',
                    email: '',
                    password: ''
                  })
                }}
              >
                <h2 className="mb-50">Artist Store</h2>
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
                <div className="input-group full-width">
                  <input
                    className="full-width"
                    type="password"
                    name="password"
                    required="required"
                    value={this.state.password}
                    onChange={this.saveToState}
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <button className="gradient btn" type="submit">
                  Sign In
                </button>
                <div className="mt-25 flex-apart">
                  <p>
                    Need an account? &nbsp;
                    <Link href="/signup">
                      <a>Sign Up</a>
                    </Link>
                  </p>
                  <p>
                    <Link href="/requestReset">
                      <a>Forgot Password?</a>
                    </Link>
                  </p>
                </div>
              </form>
            </>
          )
        }}
      </Mutation>
    )
  }
}

export default Signin
