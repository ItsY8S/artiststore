import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import AddConcert from '../components/AddConcert'
import Concert from '../components/Concert'

// QUERY for all concerts owned by user here
const CONCERTS_BY_ARTIST = gql`
  query CONCERTS_BY_ARTIST {
    concerts {
      id
      date
      location
      venue
    }
  }
`

class Concerts extends React.Component {
  render() {
    return (
      <div>
        <Query query={CONCERTS_BY_ARTIST}>
          {({ data, loading, error }) => {
            if (error) return <p>Error: {error.message}</p>
            if (loading) return <p>Loading...</p>
            const concerts = data.concerts
            console.log('Concerts:', concerts)
            return (
              <table className="u-full-width">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Venue</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* TODO: Check for a user with permissions and conditionally render add concert */}
                  <AddConcert />
                  {concerts.map(concert => (
                    <Concert concert={concert} key={concert.id} />
                  ))}
                </tbody>
              </table>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default Concerts
export { CONCERTS_BY_ARTIST }
