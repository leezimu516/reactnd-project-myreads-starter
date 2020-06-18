import React from "react";
import {Link} from "react-router-dom";
import * as Utils from "./Utils";
import Books from "./Books";
import * as BooksAPI from "../BooksAPI";

class SearchBookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBookList: [],
            searchItem: ''
        };

        this.onInput = this.onInput.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.updateSearchBookShelf = this.updateSearchBookShelf.bind(this);
    }

    onInput(e) {
        let duration = 1000;
        let searchValue = e.target.value;
        clearTimeout(this.inputTimer);
        this.inputTimer = setTimeout(() => {
            console.log("ddd", searchValue);
            this.updateInputValue(searchValue);
        }, duration)
    }

    updateInputValue(value) {

        this.setState({
            searchItem: value
        });
        if (this.state.searchItem) {
            BooksAPI.search(this.state.searchItem).then(
                data => {
                    console.log("search book", data);
                    this.updateSearchBookShelf(data)


                }
            ).catch(() => {
                this.setState({searchBookList: []})
            })
        } else {
            this.setState({searchBookList: []})
        }

    }

    updateSearchBookShelf(books) {
        let updatedSearchBookShelf = [];
        books.map((book) => {
            BooksAPI.get(book.id).then(
                data => {
                    // console.log(data);
                    updatedSearchBookShelf.push(data)
                }
            ).then(() => {
                    this.setState({searchBookList: updatedSearchBookShelf})
                    // console.log("updated search book", updatedSearchBookShelf)
                }
            )
        });
    }


    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">

                    <Link to='/'>
                        <button className="close-search"
                                onClick={() => {
                                    Utils.refreshBooks()
                                }}>Close
                        </button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input id="searchBar" type="text" placeholder="Search by title or author"
                               onChange={this.onInput}
                        />

                    </div>
                </div>

                <div className="search-books-results">

                    {
                        this.state.searchBookList &&
                        <Books books={this.state.searchBookList} isSearchPage={true}/>
                    }
                    {/*{console.log(333, this.state.searchBookList)}*/}
                    {/*{console.log(333, this.state.searchBookList.length)}*/}

                </div>
            </div>
        )
    }
}

export default SearchBookList