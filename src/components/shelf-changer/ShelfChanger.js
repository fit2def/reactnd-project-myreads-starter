import React from 'react';
import { Bookcase } from '../../LibraryInfo';

const ShelfChanger = (props) => (
  <div className="book-shelf-changer">
  <select
    onChange={(event) => props.changeShelf(event.target.value)}
    defaultValue={props.currentShelf}
  >
    <option disabled>Move to...</option> {
      Bookcase.map( shelf => (
        <option
          key={shelf.name}
          value={shelf.name}
        >{shelf.label}
        </option>
      ))
    }
  </select>
  </div>
)

export default ShelfChanger;
