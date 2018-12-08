import React from 'react'
import Search from './Search'

const Title = props => {
  return (
    <div className="search-flex">
      <h1 className="title bold">{props.title}</h1>
      <Search />
    </div>
  )
}

export default Title
