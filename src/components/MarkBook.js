import React from 'react'
import * as BooksAPI from "../BooksAPI";
import * as Utils from "./Utils";

class MarkBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bookSelection: this.props.book.shelf,
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        let book_shelf = e.target.value;
        console.log(book_shelf);
        if(e.target.value && this.props.book) {
            BooksAPI.update(this.props.book, e.target.value).then(

                data => {
                    console.log("book shelf", data);
                    this.setState({bookSelection: book_shelf})
                    console.log(data);
                    if(this.props.isSearchPage === false) {
                        Utils.refreshBooks();
                    }

                }

            )
        }
    }


    render() {
        // let bookSelection = 'none';
        if (this.props.book.shelf) {
            // bookSelection = this.props.book.shelf
            // this.setState({bookSelection: this.props.book.shelf})

        }
        return (
            <div className="book-shelf-changer">
                {console.log(this.state.bookSelection)}
                <select onChange={this.handleChange} value={this.state.bookSelection}>
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