import Link from 'next/link'
import NavStyles from './styles/NavStyles'

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
