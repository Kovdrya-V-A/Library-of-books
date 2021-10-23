import s from "./BooksList.module.css";
import React from "react";
import Book from "./Book/Book";
import MainPreloader from "../../Assets/Preloader/MainPreloader";

type PropsType = {
    booksList: Array<Object>,
    totalCount: number,
    onSetMoreBooks: (currentSearchText: string,
                     currentCategory: string,
                     currentSorting: string,
                     startIndex: number) => void,
    currentSearchText: string,
    currentCategory: string,
    currentSorting: string,
    firstLoadInProgress: boolean,
    loadMoreInProgress: boolean

}


const BooksList = ({
                       booksList, totalCount,
                       onSetMoreBooks, currentSearchText,
                       currentCategory, currentSorting,
                       firstLoadInProgress, loadMoreInProgress
                   }: PropsType) => {

    let booksItems = booksList.map((b: any) => b ?
        <Book title={b.title} //СПОРНО!-отсечение повторяющихся данных. (см: src/Redux/Reducers/booksListReducer)
              img={b.img}
              authors={b.authors}
              category={b.category}
              id={b.id}
              key={b.id}/> : null)
    if (firstLoadInProgress) {
        return <div className={s.wrapper}><MainPreloader size={100}/></div>
    }

    return (
        <div className={s.wrapper}>
            <div className={s.resultBar}><h3>Found {totalCount} results</h3>
                {booksItems.length > 0 ? <div className={s.booksListBar}>{booksItems}</div> :
                    <p>No results were found for your search - please try again</p>}</div>
            <div className={s.showMore}>
                {booksList.length > 0 && booksList.length !== totalCount ? <div>{!loadMoreInProgress ? <button
                    onClick={() => onSetMoreBooks(currentSearchText, currentCategory, currentSorting, booksList.length)}>Show
                    more
                </button> : <MainPreloader size={50}/>}</div> : null}
            </div>
        </div>

    )
}


export default BooksList