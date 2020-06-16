import React from 'react'
import ReactDOM from 'react-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from "./components/Book";
import Books from "./components/Books";

class BooksApp extends React.Component {
    // state = {
    //   /**
    //    * TODO: Instead of using this state variable to keep track of which page
    //    * we're on, use the URL in the browser's address bar. This will ensure that
    //    * users can use the browser's back and forward buttons to navigate between
    //    * pages, as well as provide a good URL they can bookmark and share.
    //    */
    //   showSearchPage: false,
    //
    // };

    constructor(props) {
        super(props);
        this.state = {
            searchItem: '',
            showSearchPage: false,
            searchBookList: [],
            wantToRead: [],
            currentlyReading: [],
            read: [],
            // bookList: []
        };

        this.onInput = this.onInput.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }


    onInput(e) {
        let duration = 1000;
        let searchValue = e.target.value
        clearTimeout(this.inputTimer);
        this.inputTimer = setTimeout(() => {
            console.log("ddd", searchValue)
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
                    this.setState({searchBookList: data})
                    console.log(1111, data)
                }
            )
        } else {
            this.setState({searchBookList: []})
        }

    }

    componentWillMount() {
        let current = [];
        let want = [];
        let read = [];

        BooksAPI.getAll().then(
            data => {
                this.setState({bookList: data})
                console.log(data)
                data.map((book) => {

                    if(book.shelf === "currentlyReading") {
                        current.push(book)
                        this.setState({currentlyReading: current})
                    } else if(book.shelf === "wantToRead") {
                        want.push(book)
                        this.setState({wantToRead: want})

                    } else if(book.shelf === "read") {
                        read.push(book)
                        this.setState({read: read})
                    }
                })

                ReactDOM.render(<Books books={this.state.currentlyReading}/>, document.getElementById('currentlyReading'));
                ReactDOM.render(<Books books={this.state.wantToRead}/>, document.getElementById('wantToRead'));
                ReactDOM.render(<Books books={this.state.read}/>, document.getElementById('read'));

            }
        )
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <div className="search-books">
                        <div className="search-books-bar">
                            <button className="close-search"
                                    onClick={() => this.setState({showSearchPage: false})}>Close
                            </button>
                            <div className="search-books-input-wrapper">
                                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                                <input id="searchBar" type="text" placeholder="Search by title or author"
                                       onChange={this.onInput}
                                />

                            </div>
                        </div>

                        <div className="search-books-results">

                            {
                                this.state.searchBookList &&
                                this.state.searchBookList.length > 0 &&
                                <Books books={this.state.searchBookList}/>
                            }
                            {console.log(333, this.state.searchBookList)}

                        </div>
                    </div>
                ) : (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Currently Reading</h2>
                                    <div className="bookshelf-books" id="currentlyReading">

                                    </div>
                                </div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Want to Read</h2>
                                    <div className="bookshelf-books" id="wantToRead">

                                    </div>
                                </div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Read</h2>
                                    <div className="bookshelf-books" id="read">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="open-search">
                            <button onClick={() => this.setState({showSearchPage: true})}>Add a book</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default BooksApp
