import s from "../../App.module.css";
import React from "react";

const BooksList = ({booksData}) => {

    let booksItems = booksData.map((b) => <div>{b.volumeInfo.title}</div>)

    return (
        <div className={s.wrapper}>
            <h3>Found {booksData.totalItems || 0} results</h3>
            {booksItems}
        </div>

    )
}

export default BooksList