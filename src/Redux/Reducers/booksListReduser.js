import {getBooks} from "../../DAL/ApiRequests";

const SET_BOOKS = "SET_BOOKS"

const initialState = {
    booksData:[]
}

const bookslistReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS: {
            return {
                ...state,
                booksData: action.data
            }
        }
    }
    return state
}

export const setBooks = (data) => {
    return {
        type: SET_BOOKS,
        data: data
    }
}

export const setBooksThunkCreator = (searchText) => async (dispatch) => {
    const data = await getBooks(searchText)
    dispatch(setBooks(data.items))
}

export default  bookslistReducer
