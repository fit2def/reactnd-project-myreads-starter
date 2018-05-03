import React from 'react'
import { Link } from 'react-router-dom'
import { Bookcase } from '../../LibraryInfo'
import Bookshelf from '../bookshelf/Bookshelf'

import './MyBooks.css'

const MyBooks = (props) => (
  <div className="my-books">

    <div className="my-books-title">
      <h1>MyReads</h1>
    </div>

    <div className="my-books-content">{
      Bookcase
        .filter(shelf => shelf.name !== 'none')
        .map(shelf => (
          <Bookshelf
            key={shelf.name}
            title={shelf.label}
            books={props.books.filter(b => b.shelf === shelf.name)}
            changeShelf={props.changeShelf}
          />
      ))
    }
    </div>

    <div className="open-search">
      <Link to='/search'>Add a book</Link>
    </div>

  </div>
)

export default MyBooks
