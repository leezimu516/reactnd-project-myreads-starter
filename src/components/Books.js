import React from 'react'
import Book from "./Book";

class Books extends React.Component {


    render() {
        console.log(444,this.props.books)
        const listItems = this.props.books.map((book) =>

            <li>
                <Book book={book}/>
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