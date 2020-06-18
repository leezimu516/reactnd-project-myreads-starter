import React from 'react'
import ReactDOM from 'react-dom'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from "./components/Book";
import Books from "./components/Books";
import * as Utils from "./components/Utils"
import SearchBookList from "./components/SearchBookList";
import BookList from "./components/BookList";

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
    }

    componentWillMount() {
        Utils.refreshBooks()
    }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <Route exact path='/' component={BookList}/>

                <Route path="/search" component={SearchBookList} />

            </div>

        )
    }
}

export default BooksApp
