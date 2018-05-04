import React, { Component } from 'react';
import * as BooksAPI from '../../BooksAPI';
import SearchBar from './SearchBar';
import Bookshelf from '../bookshelf/Bookshelf';

import './Search.css'

class Search extends Component {
    state = { results: [] };

    search = query =>
      query
      ? this.apiSearch(query)
      : this.setState({ results: [] });


    apiSearch = (query) => {
      BooksAPI.search(query)
        .then(results => {
          this.setState({
            results: this.getConfiguredResults(results)
          });
        });
    };

    getConfiguredResults = results => {
      results = Array.isArray(results) ? results : [];
      results.forEach(r => r.shelf = 'none');
      return results;
    }

    mergeResults = results => {
      const resultIds = results.map(r => r.id);
      const myBooksinResults = this.props.books.filter(b => resultIds.includes(b.id));
      const myIds = myBooksinResults.map(b => b.id);
      return myBooksinResults.concat(results.filter(r => !myIds.includes(r.id)));
    }

    render(){
      return (
        <div className="search-books">
          <SearchBar search={(query) => this.search(query)}/>
          <div style={{height: '50px'}}/>
          <Bookshelf
            books={this.mergeResults(this.state.results)}
            title='Results'
            changeShelf={this.props.changeShelf}
          />
      </div>
      )
  }
}

export default Search;
