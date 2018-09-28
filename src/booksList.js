import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Shelf from './shelf'

class BooksList extends Component {
  //   ►


  render() {

    const { books, onUpdateShelf } = this.props

    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            <Shelf bookShelf='Currently Reading' shelfValue='currentlyReading' books={books} updateBooks={onUpdateShelf} />
            <Shelf bookShelf='Want To Read' shelfValue='wantToRead' books={books} updateBooks={onUpdateShelf} />
            <Shelf bookShelf='Read' shelfValue='read' books={books} updateBooks={onUpdateShelf} />

          </div>
        </div>

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>

      </div>

    )
  }


}

export default BooksList
