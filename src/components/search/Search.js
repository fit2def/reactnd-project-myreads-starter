import React, { Component } from 'react'
import * as BooksAPI from '../../BooksAPI'
import SearchBar from './SearchBar'
import Bookshelf from '../bookshelf/Bookshelf'

import './Search.css'

class Search extends Component {
    state = {
      results: []
    }

    search = query => {
      BooksAPI.search(query)
        .then(results => {
          this.configureResults(results)
          this.setState({
            results: results
          })
        })
    }

    configureResults = results => {
      results = Array.isArray(results) ? results : []
      results.forEach(r => r.shelf = 'none')
    }

    merge = results => {
      const resultIds = results.map(r => r.id)
      const myBooksinResults = this.props.books.filter(b => resultIds.includes(b.id))
      const myIds = myBooksinResults.map(b => b.id)
      return myBooksinResults.concat(results.filter(r => !myIds.includes(r.id)))
    }

    render(){
      return (
        <div className="search-books">
          <SearchBar search={(query) => this.search(query)}/>
          <Bookshelf
            books={this.merge(this.state.results)}
            title='Results'
            changeShelf={this.props.changeShelf}
            className="search-books-results"
          />
      </div>
      )
  }
}

export default Search
