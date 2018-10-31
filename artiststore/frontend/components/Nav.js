import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <a>Dashboard</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
    </nav>
  )
}

export default Nav
