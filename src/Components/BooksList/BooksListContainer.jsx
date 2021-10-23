import React from "react";
import {connect} from "react-redux";
import {setBooksThunkCreator, setMoreBooksThunkCreator} from "../../Redux/Reducers/booksListReduser";
import BooksList from "./BooksList";
import SearchBar from "../SearchBar/SearchBar";

let mapStateToProps = (state) => {
    return {
        booksData: state.booksList.booksData,
        totalCount: state.booksList.totalCount,
        currentSearchText: state.booksList.currentSearchText,
        currentCategory: state.booksList.currentCategory,
        currentSorting: state.booksList.currentSorting,
        firstLoadInProgress: state.booksList.firstLoadInProgress,
        loadMoreInProgress: state.booksList.loadMoreInProgress,
    }
}

class BooksListContainer extends React.Component {
    componentDidMount() {
        if (this.props.booksData.length === 0) {
            this.onSetBooks()
        }
    }

    onSetBooks = (searchText = "", selectCategory = "all", selectSorting = "relevance") => {
        this.props.setBooksThunkCreator(searchText, selectCategory, selectSorting)
    }

    onSetMoreBooks = (currentSearchText, currentCategory, currentSorting, startIndex) => {
        this.props.setMoreBooksThunkCreator(currentSearchText, currentCategory, currentSorting, startIndex)
    }

    render() {
        let booksList = this.props.booksData.map((b) => b.volumeInfo ? Object({  //СПОРНО!-отсечение повторяющихся данных. (см: src/Redux/Reducers/booksListReducer)
            title: b.volumeInfo.title,
            img: b.volumeInfo.imageLinks?.smallThumbnail || "https://image.flaticon.com/icons/png/512/1246/1246881.png",
            authors: b.volumeInfo.authors,
            category: b.volumeInfo.categories?.[0],
            id: b.id,
            key: b.id,
        }): null)
        return <>
            <SearchBar onSetBooks={this.onSetBooks}
                       firstLoadInProgress = {this.props.firstLoadInProgress}/>
            <BooksList booksList={booksList}
                       totalCount={this.props.totalCount}
                       onSetMoreBooks={this.onSetMoreBooks}
                       currentSearchText={this.props.currentSearchText}
                       currentCategory={this.props.currentCategory}
                       currentSorting={this.props.currentSorting}
                       firstLoadInProgress = {this.props.firstLoadInProgress}
                       loadMoreInProgress = {this.props.loadMoreInProgress}/>
        </>
    }
}

export default connect(mapStateToProps, {
    setBooksThunkCreator,
    setMoreBooksThunkCreator,
})(BooksListContainer)

