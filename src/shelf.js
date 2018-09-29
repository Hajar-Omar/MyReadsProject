import React from 'react';
import Book from './book'

function shelf(props) {

   // render() {

        //const { books, updateBooks, shelfValue, bookShelf } = this.props

        return (
            <div className="bookshelf" key={props.shelfValue}>
                <h2 className="bookshelf-title">{props.bookShelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">

                        {props.books.filter(bookS => bookS.shelf === props.shelfValue).map((book) => (
                            <li key={book.id}>
                                {/*book component*/}
                                <Book book={book} onUpdateShelf={props.updateBooks} />
                            </li>
                        ))}

                    </ol>
                </div>
            </div>
        )
//    }
}
export default shelf