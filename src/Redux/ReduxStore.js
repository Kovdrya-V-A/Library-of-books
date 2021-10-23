import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import booksListReducer from "./Reducers/booksListReduser";
import bookReducer from "./Reducers/bookReducer";

const enchansers = [
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
]

const reducers = combineReducers({
    booksList: booksListReducer,
    book: bookReducer,
})

export const store = createStore(reducers, compose(...enchansers))