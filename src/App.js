import s from './App.module.css';
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./Redux/ReduxStore";
import BooksListContainer from "./Components/BooksList/BooksListContainer";
import BookViewPageContainer from "./Components/BookViewPage/BookViewPageContainer";


function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className={s.App}>
                    <Route exact path="/" render={() => <BooksListContainer/>}/>
                    <Route path="/Book/:bookId?" render={() => <BookViewPageContainer/>}/>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;