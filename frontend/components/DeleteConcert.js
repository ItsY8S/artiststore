import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Router from 'next/router'
import { CONCERTS_BY_ARTIST } from './Concerts'

const DELETE_CONCERT_MUTATION = gql`
  mutation DELETE_CONCERT_MUTATION($id: ID!) {
    deleteConcert(id: $id) {
      id
    }
  }
`

class DeleteConcert extends React.Component {
  update = (cache, payload) => {
    const data = cache.readQuery({ query: CONCERTS_BY_ARTIST })
    console.log(data)
    data.concerts = data.concerts.filter(
      concert => concert.id !== payload.data.deleteConcert.id
    )
    cache.writeQuery({ query: CONCERTS_BY_ARTIST, data })
  }

  render() {
    return (
      <Mutation
        mutation={DELETE_CONCERT_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteConcert, { error }) => (
          <button
            onClick={() => {
              if (confirm('Are you sure you want to delete this concert?')) {
                deleteConcert().catch(err =>
                  alert("You don't have permission to delete this concert.")
                )
              }
              Router.push({
                pathname: '/concerts'
              })
            }}
            className="inherit btn-solid red"
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    )
  }
}

export default DeleteConcert
