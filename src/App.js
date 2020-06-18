import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
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

    componentWillMount() {
        Utils.refreshBooks()
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
