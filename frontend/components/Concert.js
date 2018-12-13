import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import DeleteConcert from './DeleteConcert'

class Concert extends React.Component {
  static propTypes = {
    concert: PropTypes.object.isRequired
  }

  render() {
    return (
      <tr className="concert-info">
        <td className="fw-300">
          {format(this.props.concert.date, 'MMM dd', {
            awareOfUnicodeTokens: true
          })}
        </td>
        <td className="fw-600">{this.props.concert.location}</td>
        <td className="fw-300">{this.props.concert.venue}</td>
        <td>
          <DeleteConcert id={this.props.concert.id}>Delete</DeleteConcert>
        </td>
      </tr>
    )
  }
}

export default Concert
