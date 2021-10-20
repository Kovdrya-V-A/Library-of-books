import {getBooks} from "../../DAL/ApiRequests";

const SET_BOOKS = "SET_BOOKS"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"

const initialState = {
    booksData:[],
    totalCount: 0,
}

const bookslistReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS: {
            return {
                ...state,
                booksData: action.data
            }
        }
        case SET_TOTAL_COUNT: {
            return  {
                ...state,
                totalCount: action.totalCount
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

export const setTotalCount = (totalItems) => {
    return {
        type:SET_TOTAL_COUNT,
        totalCount: totalItems
    }
}

export const setBooksThunkCreator = (searchText) => async (dispatch) => {
    const data = await getBooks(searchText)
    dispatch(setBooks(data.items))
    dispatch(setTotalCount(data.totalItems))
}

export default  bookslistReducer
