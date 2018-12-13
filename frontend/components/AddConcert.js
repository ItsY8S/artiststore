import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Error from './ErrorMessage'
import { CONCERTS_BY_ARTIST } from './Concerts'

const ADD_CONCERT_MUTATION = gql`
  mutation ADD_CONCERT_MUTATION(
    $date: DateTime!
    $location: String!
    $venue: String!
  ) {
    createConcert(date: $date, location: $location, venue: $venue) {
      date
      location
      venue
    }
  }
`

class AddConcert extends React.Component {
  state = {
    date: '',
    location: '',
    venue: ''
  }

  handleChange = e => {
    const { name, type, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    this.setState({
      [name]: val
    })
  }

  render() {
    return (
      <Mutation
        mutation={ADD_CONCERT_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CONCERTS_BY_ARTIST }]}
      >
        {(createConcert, { loading, error }) => (
          <>
            <tr>
              <td style={{ maxWidth: '110px' }}>
                <input
                  className="uppercase fw-300"
                  type="date"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleChange}
                  placeholder="DATE"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="fw-700"
                  name="location"
                  value={this.state.location}
                  onChange={this.handleChange}
                  placeholder="LOCATION"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="fw-300"
                  name="venue"
                  value={this.state.venue}
                  onChange={this.handleChange}
                  placeholder="VENUE"
                />
              </td>
              <td>
                <button
                  className="btn-solid green"
                  disabled={loading}
                  aria-busy={loading}
                  onClick={async e => {
                    e.preventDefault()
                    console.log(e)
                    const res = await createConcert()
                    console.log(res)
                    this.setState({
                      date: '',
                      location: '',
                      venue: ''
                    })
                  }}
                  type="submit"
                >
                  Add
                </button>
              </td>
            </tr>
            {error ? (
              <tr>
                <Error error={error} />
              </tr>
            ) : null}
          </>
        )}
      </Mutation>
    )
  }
}

export default AddConcert
export { ADD_CONCERT_MUTATION }
