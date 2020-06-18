import React from 'react'
import Book from "./Book";

class Books extends React.Component {


    render() {
        // console.log(444,this.props.books)
        const listItems = this.props.books.map((book) =>

            <li key={book.id}>
                <Book book={book} isSearchPage={this.props.isSearchPage}/>
            </li>
        );

        return (
            <ol className="books-grid">
                {listItems}
            </ol>

        );
    }
}


export default Books;