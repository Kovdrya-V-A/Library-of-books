import React from "react";
import {connect} from "react-redux";
import {setBooksThunkCreator} from "../../Redux/Reducers/booksListReduser";
import BooksList from "./BooksList";
import SearchBar from "../SearchBar/SearchBar";

let mapStateToProps = (state) => {
    return {
        booksData: state.booksList.booksData
    }
}

class BooksListContainer extends React.Component {
    componentDidMount() {
    }

    onSetBooks = (searchText) => {
        this.props.setBooksThunkCreator(searchText)
    }

    render() {
        return <>
            <SearchBar onSetBooks = {this.onSetBooks}/>
            <BooksList booksData = {this.props.booksData}/>
        </>
    }
}

export default connect (mapStateToProps, {setBooksThunkCreator})(BooksListContainer)

