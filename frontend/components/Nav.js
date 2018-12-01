import Link from 'next/link'
import NavStyles from './styles/NavStyles'
import Router from 'next/router'
import NProgress from 'nprogress'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import User from './User'
import { CURRENT_USER_QUERY } from './User'
import Cart from './Cart'
import { TOGGLE_CART_MUTATION } from './Cart'

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NProgress.done()
}

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout {
      message
    }
  }
`

const Nav = () => {
  return (
    <User>
      {({ data }) => (
        <NavStyles id="sidebar">
          <Cart />
          <img
            id="profile-picture"
            src="/static/profile.jpg"
            alt="Store Image"
          />
          <ul>
            {data.me && (
              <>
                <li id="selected">
                  <Link href="/">
                    <a>Dashboard</a>
                  </Link>
                </li>

                <li>
                  <Link href="/products">
                    <a>Products</a>
                  </Link>
                </li>

                <li>
                  <Link href="/orders">
                    <a>Orders</a>
                  </Link>
                </li>

                <li>
                  <Link href="/concerts">
                    <a>Concerts</a>
                  </Link>
                </li>

                <li>
                  <Link href="/manage">
                    <a>Manage</a>
                  </Link>
                </li>

                <li>
                  <Mutation mutation={TOGGLE_CART_MUTATION}>
                    {toggleCart => (
                      <button className="nav-button" onClick={toggleCart}>
                        Cart
                      </button>
                    )}
                  </Mutation>
                </li>

                <li>
                  <Mutation
                    mutation={SIGNOUT_MUTATION}
                    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
                  >
                    {signout => (
                      <Link href="/signout">
                        <a onClick={signout}>Sign Out</a>
                      </Link>
                    )}
                  </Mutation>
                </li>
              </>
            )}

            {!data.me && (
              <>
                <li>
                  <Link href="/products">
                    <a>Products</a>
                  </Link>
                </li>

                <li>
                  <Link href="/concerts">
                    <a>Concerts</a>
                  </Link>
                </li>

                <li>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>

                <li>
                  <Mutation mutation={TOGGLE_CART_MUTATION}>
                    {toggleCart => (
                      <button className="nav-button" onClick={toggleCart}>
                        Cart
                      </button>
                    )}
                  </Mutation>
                </li>

                <li>
                  <Link href="/signin">
                    <a>Sign In</a>
                  </Link>
                </li>
              </>
            )}

            <span className="divider" />
          </ul>
        </NavStyles>
      )}
    </User>
  )
}

export default Nav
