import React from 'react'

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

                    <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }
}


export default Book;