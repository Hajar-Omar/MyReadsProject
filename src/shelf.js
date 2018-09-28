import React, { Component } from 'react';
import Book from './book'

class shelf extends Component {

    render() {

        const { books, updateBooks, shelfValue, bookShelf } = this.props

        return (
            <div className="bookshelf" key={shelfValue}>
                <h2 className="bookshelf-title">{bookShelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">

                        {books.filter(bookS => bookS.shelf === shelfValue).map((book) => (
                            <li key={book.id}>
                                {/*book component*/}
                                <Book book={book} onUpdateShelf={updateBooks} />
                            </li>
                        ))}

                    </ol>
                </div>
            </div>
        )
    }
}
export default shelf