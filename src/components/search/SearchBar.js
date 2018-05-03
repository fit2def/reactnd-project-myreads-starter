import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const SearchBar = props => (
  <div className="search-books-bar">
    <Link
      to='/'
      className="close-search">Close
    </Link>
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title or author"
        onChange={(event) => props.search(event.target.value)}
      />
    </div>
  </div>
)

export default SearchBar
