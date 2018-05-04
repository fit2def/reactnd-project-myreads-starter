import React from 'react';
import ShelfChanger from '../shelf-changer/ShelfChanger';

const Book = (props) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
              width: 128,
              height: 193,
              backgroundImage: props.book.imageLinks? `url(${props.book.imageLinks.thumbnail})` : 'none'
            }}
        >
        {props.book.shelf !== 'none' && <div className="my-read">My Read</div>}
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

export default Book;
