import React, { useState } from 'react';
import AddBookComponent from './AddBook';
import BookListComponent from './BookList';
import GroupByComponent from './GroupBy';

function MainComponent() {
    let [books, setBooks] = useState([]);

    let changeBookList = (bookList) => {
        setBooks(bookList);
    }

    return ( <
        div className = "main" >
        <
        AddBookComponent / >
        <
        GroupByComponent changeBookList = { changeBookList }
        /> <
        BookListComponent books = { books }
        /> <
        /div>
    )
}

export default MainComponent;