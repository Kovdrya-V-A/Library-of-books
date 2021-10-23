import React from "react";
import BookViewPage from "./BookViewPage";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {setBookDataThunkCreator} from "../../Redux/Reducers/bookReducer";

let mapStateToProps = (state) => { // Сделать селекторы
    return {
        bookData: state.book.bookData,
        loadInProgress:state.book.loadInProgress
    }
}

class BookViewPageContainer extends React.Component {

    componentDidMount() {
        let bookId = this.props.match.params.bookId
        this.props.setBookDataThunkCreator(bookId)
    }

    render() {
        return <BookViewPage title={this.props.bookData.volumeInfo?.title}
                             img={this.props.bookData.volumeInfo?.imageLinks?.thumbnail ||
                             "https://image.flaticon.com/icons/png/512/1246/1246881.png"}
                             subtitle={this.props.bookData.volumeInfo?.subtitle}
                             categories={this.props.bookData.volumeInfo?.categories}
                             authors={this.props.bookData.volumeInfo?.authors}
                             publishedDate={this.props.bookData.volumeInfo?.publishedDate}
                             publisher = {this.props.bookData.volumeInfo?.publisher}
                             description={this.props.bookData.volumeInfo?.description}
                             loadInProgress = {this.props.loadInProgress}
        />
    }
}


export default compose(
    connect(mapStateToProps, {setBookDataThunkCreator}),
    withRouter
)(BookViewPageContainer)