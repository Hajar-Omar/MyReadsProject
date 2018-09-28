import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './book'
import * as BooksAPI from './BooksAPI'

class SearchBook extends Component {

  state = {
    query: '',
    booksSearch: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    if (query) {
      BooksAPI.search(query).then((booksSearch) => {
        if (booksSearch.error) {
          this.setState({ booksSearch: [] })
        } else {
          this.setState({ booksSearch: booksSearch })
        }
      })
    } else {
      this.setState({ booksSearch: [] })
    }
  }



  render() {

    const { books, onUpdateShelf } = this.props

    //display on the shelf
    this.state.booksSearch.map((booksSearch) => {
      booksSearch.shelf = "none";
      return (
        books.map((book) => {
          if (booksSearch.id === book.id) {
            booksSearch.shelf = book.shelf
          }
          return booksSearch.shelf;
        }
        ))
    })


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(e) => this.updateQuery(e.target.value)} />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.booksSearch.map((book) => (
              <li key={book.id}>
                <Book book={book} onUpdateShelf={onUpdateShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook
