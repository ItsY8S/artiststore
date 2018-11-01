import Link from 'next/link'
import NavStyles from './styles/NavStyles'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NProgress.done()
}

const Nav = () => {
  return (
    <NavStyles id="sidebar">
      <img id="profile-picture" src="/static/profile.jpg" alt="Store Image" />
      <ul>
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
          <Link href="/logout">
            <a>Logout</a>
          </Link>
        </li>
        <span className="divider" />
      </ul>
    </NavStyles>
  )
}

export default Nav
