import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import bookslistReducer from "./Reducers/booksListReduser";
import thunkMiddleware from "redux-thunk"

const enchansers = [
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
]

const reducers = combineReducers({
    booksList: bookslistReducer
})

export const store = createStore(reducers, compose(...enchansers))