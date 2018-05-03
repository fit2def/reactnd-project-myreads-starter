import React from 'react'
import ShelfChanger from '../shelf-changer/ShelfChanger'

const Book = (props) => (
  <li>
    <div className="book">
      <div className="book-top">

        <div
          className="book-cover"
          style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.thumbnail})` }}>
        {props.book.shelf !== 'none' && <div className="your-read">Your Read</div>}
        </div>
        <ShelfChanger
          currentShelf={props.book.shelf}
          changeShelf={(destinationShelf) => props.changeShelf(props.book, destinationShelf)}
        />
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  </li>
)



export default Book
