import React from 'react'
import { Link } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'

const SearchBar = props => (
  <div className="search-books-bar">
    <Link
      to='/'
      className="close-search">Close
    </Link>
    <div className="search-books-input-wrapper">
      <DebounceInput
        minLength={1}
        debounceTimeout={300}
        autoFocus
        type="text"
        placeholder="Search by title or author"
        onChange={(event) => props.search(event.target.value)}
      />
    </div>
  </div>
)

export default SearchBar
