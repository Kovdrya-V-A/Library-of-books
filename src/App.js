import s from './App.module.css';
import React from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./Redux/ReduxStore";
import BooksListContainer from "./Components/BooksList/BooksListContainer";


function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className={s.App}>
                    <BooksListContainer/>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;