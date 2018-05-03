import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import MyBooks from '../my-books/MyBooks'
import Search from '../search/Search'

class BooksApp extends React.Component {

  state = {
    books: [],
  }

  componentDidMount = () => {
    BooksAPI.getAll()
      .then(persistedBooks => {
        this.setState({
          books: persistedBooks
        })
      }
    )
  }

  changeShelf = (book, destinationShelf) => {
    BooksAPI.update(book, destinationShelf)
    book.shelf = destinationShelf
    this.updateLocally(book)
  }

  updateLocally = book => {
    this.setState(prevState => {
      const idx = prevState.books.map(b => b.id).indexOf(book.id)
      if(idx !== -1){
        const leaders = prevState.books.slice(0, idx)
        const followers = prevState.books.slice(idx + 1, prevState.books.length)
        return {
          books: leaders.concat(book).concat(followers)
        }
      } else {
        return {
          books: prevState.books.concat([book])
        }
      }
    })
  }

  render() {
    return (
      <div className="app">

        <Route exact path='/' render={() => (
          <MyBooks books={this.state.books} changeShelf={this.changeShelf} />
        )}/>

        <Route path='/search' render={() => (
          <Search books={this.state.books} changeShelf={this.changeShelf} />
        )} />

      </div>
    )
  }

}

export default BooksApp
