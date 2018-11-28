import React from 'react'
import Link from 'next/link'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { perPage } from '../config'
import Head from 'next/head'

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    productsConnection {
      aggregate {
        count
      }
    }
  }
`

const Pagination = props => {
  return (
    <Query query={PAGINATION_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>
        const count = data.productsConnection.aggregate.count
        const pages = Math.ceil(count / perPage)
        const page = props.page
        return (
          <>
            <Head>
              <title>
                Artist Store — Page {page} of {pages}
              </title>
            </Head>

            <div className="pagination">
              <Link
                prefetch
                href={{
                  pathname: 'products',
                  query: { page: page - 1 }
                }}
              >
                <a aria-disabled={page <= 1}>← Previous</a>
              </Link>
              <p>
                Page {page} of {pages}
              </p>
              <Link
                prefetch
                href={{
                  pathname: 'products',
                  query: { page: page + 1 }
                }}
              >
                <a aria-disabled={page >= pages}>Next →</a>
              </Link>
            </div>
          </>
        )
      }}
    </Query>
  )
}

export default Pagination
