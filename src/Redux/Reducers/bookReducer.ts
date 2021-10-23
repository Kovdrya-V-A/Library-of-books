import {getSelectedBook} from "../../DAL/ApiRequests";

const SET_BOOK_DATA = "SET_BOOK_DATA"
const TOGGLE_LOAD_PROGRESS = "TOGGLE_LOAD_PROGRESS"


const initialState = {
    bookData: {} as Object,
    loadInProgress: false as boolean
}

export type initialStateType = typeof initialState

const bookReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_BOOK_DATA: {
            return {
                ...state,
                bookData: action.data
            }
        }
        case TOGGLE_LOAD_PROGRESS: {
            return {
                ...state,
                loadInProgress: action.inProgress
            }
        }
    }
    return state
}
export type setBookDataActionType = {
    type: typeof SET_BOOK_DATA,
    data: Object
}
export const setBookData = (data: Object): setBookDataActionType => {
    return {
        type: SET_BOOK_DATA,
        data
    }
}

export type toggleLoadProgressType = {
    type: typeof TOGGLE_LOAD_PROGRESS,
    inProgress: boolean
}
export const toggleLoadProgress = (inProgress: boolean): toggleLoadProgressType => {
    return {
        type: TOGGLE_LOAD_PROGRESS,
        inProgress
    }
}


export const setBookDataThunkCreator = (bookId: number) => async (dispatch: any) => {
    dispatch(toggleLoadProgress(true))
    const data = await getSelectedBook(bookId) as Object
    dispatch(setBookData(data))
    dispatch(toggleLoadProgress(false))
}

export default bookReducer
