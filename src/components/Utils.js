import * as BooksAPI from "../BooksAPI";
import ReactDOM from "react-dom";
import Books from "./Books";
import React from "react";

export const refreshBooks = () => {
        let current = [];
        let want = [];
        let read = [];
        BooksAPI.getAll().then(
            data => {
                // this.setState({bookList: data})
                console.log(data);
                data.map((book) => {

                    if(book.shelf === "currentlyReading") {
                        current.push(book)

                    } else if(book.shelf === "wantToRead") {
                        want.push(book)

                    } else if(book.shelf === "read") {
                        read.push(book)
                    }
                });
                // this.setState({currentlyReading: current})
                // this.setState({wantToRead: want})
                // this.setState({read: read})

                ReactDOM.render(<Books books={current} isSearchPage={false}/>, document.getElementById('currentlyReading'));
                ReactDOM.render(<Books books={want} isSearchPage={false}/>, document.getElementById('wantToRead'));
                ReactDOM.render(<Books books={read} isSearchPage={false}/>, document.getElementById('read'));

            }
        )
    }