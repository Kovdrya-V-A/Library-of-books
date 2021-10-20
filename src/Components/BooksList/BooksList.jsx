import s from "./BooksList.module.css";
import React from "react";
import Book from "./Book/Book";

const BooksList = ({booksData, totalCount}) => {


    let booksItems = booksData.map((b) => <Book title = {b.volumeInfo.title}
                                                img = {b.volumeInfo.imageLinks.smallThumbnail}
                                                author={b.volumeInfo.authors}
                                                categories={b.volumeInfo.categories}
                                                key = {b.id}
    />)

    return (
        <div className={s.wrapper}>
            <h3>Found {totalCount} results</h3>
            <div className={s.booksListBar}>{booksItems}</div>
        </div>

    )
}



export default BooksList