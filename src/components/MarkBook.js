import React from 'react'
import * as BooksAPI from "../BooksAPI";

class MarkBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        console.log(e.target.value)
        if(e.target.value && this.props.book) {
            BooksAPI.update(this.props.book, e.target.value).then(
                data => {
                    // this.setState({searchBookList: data})
                    console.log(data)
                }
            )
        }
    }

    render() {
        let bookSelection = 'none';
        if (this.props.book.shelf) {
            bookSelection = this.props.book.shelf
        }
        return (
            <div className="book-shelf-changer">
                {console.log(bookSelection)}
                <select onChange={this.handleChange} value={bookSelection}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}


export default MarkBook;