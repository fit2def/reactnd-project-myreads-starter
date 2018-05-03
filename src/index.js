import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/app/App'

import './components/app/App.css'
import './components/book/Book.css'
import './components/bookshelf/Bookshelf.css'
import './components/shelf-changer/ShelfChanger.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
