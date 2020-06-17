import React from 'react'
import MarkBook from "./MarkBook";

class Book extends React.Component {


    render() {
        let bookThumbnail;
        if(this.props.book.imageLinks && this.props.book.imageLinks.smallThumbnail) {
            bookThumbnail = <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})`
                    }}></div>;
        } else {
            bookThumbnail = <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: ''
                    }}></div>;
        }
        return (
            <div className="book">
                <div className="book-top">
                    {bookThumbnail}
                    <MarkBook book={this.props.book} isSearchPage={this.props.isSearchPage}/>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }
}


export default Book;