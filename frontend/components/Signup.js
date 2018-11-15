import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Error from './ErrorMessage'

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signup(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`

class Signup extends React.Component {
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
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
        {(signup, { error, loading }) => {
          return (
            <>
              <Error error={error} />
              <form
                className="card"
                method="POST"
                autoComplete="off"
                onSubmit={async e => {
                  e.preventDefault()
                  await signup()
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
                    type="text"
                    name="name"
                    autoFocus="autofocus"
                    required
                    value={this.state.name}
                    onChange={this.saveToState}
                  />
                  <label className="text-black" htmlFor="name">
                    Name
                  </label>
                </div>
                <div className="input-group full-width">
                  <input
                    className="full-width"
                    type="text"
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
                <button className="gradient btn" type="submit" value="Log In">
                  Sign Up
                </button>
                <p className="mt-25">
                  Have an account? &nbsp;<a href="/login">Login</a>
                </p>
              </form>
            </>
          )
        }}
      </Mutation>
    )
  }
}

export default Signup
