import {getBooks} from "../../DAL/ApiRequests";

const SET_BOOKS = "SET_BOOKS"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const SET_MORE_BOOKS = "SET_MORE_BOOKS"
const SET_CURRENT_QUERY_PARAMETERS = "SET_CURRENT_QUERY_PARAMETERS"
const TOGGLE_FIRST_LOAD_PROGRESS = "TOGGLE_FIRST_LOAD_PROGRESS"
const TOGGLE_LOAD_MORE_PROGRESS = "TOGGLE_LOAD_MORE_PROGRESS"

const initialState = {
    booksData: [] as Array<Object>,
    totalCount: 0 as number,
    currentSearchText: "" as string,
    currentCategory: "" as string,
    currentSorting: "" as string,
    firstLoadInProgress: false as boolean,
    loadMoreInProgress: false as boolean,
}

const booksListReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_BOOKS: {
            return {
                ...state,
                booksData: action.data?.length > 0 ? [...action.data] : []
            }
        }
        case SET_MORE_BOOKS: {
            return {
                ...state,
                booksData: [...state.booksData, ...action.data.map((b: any) => {  //Крайне спорное решение! Искать ошибку в способе получении данных!
                    if (!state.booksData.find((ob: any) => ob.id === b.id)) {
                        return b
                    }
                    return false
                })]
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case TOGGLE_FIRST_LOAD_PROGRESS: {
            return {
                ...state,
                firstLoadInProgress: action.inProgress
            }
        }
        case TOGGLE_LOAD_MORE_PROGRESS: {
            return {
                ...state,
                loadMoreInProgress: action.inProgress
            }
        }
        case SET_CURRENT_QUERY_PARAMETERS: {
            return {
                ...state,
                currentSearchText: action.searchText,
                currentCategory: action.selectCategory,
                currentSorting: action.selectSorting,
            }
        }
    }
    return state
}

export const setBooks = (data: Array<Object>) => {
    return {
        type: SET_BOOKS,
        data: data
    }
}
export const setMoreBooks = (data: Array<Object>) => {
    return {
        type: SET_MORE_BOOKS,
        data
    }
}

export const setTotalCount = (totalItems: number) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount: totalItems
    }
}
export const toggleInLoading = (inProgress: boolean, isFirstLoad: boolean) => {
    return {
        type: isFirstLoad ? TOGGLE_FIRST_LOAD_PROGRESS : TOGGLE_LOAD_MORE_PROGRESS,
        inProgress
    }
}

export const setCurrentQueryParameters = (searchText: string, selectCategory: string, selectSorting: string) => {
    return {
        type: SET_CURRENT_QUERY_PARAMETERS,
        searchText,
        selectSorting,
        selectCategory
    }
}


export const setBooksThunkCreator = (searchText: string, selectCategory: string, selectSorting: string) => async (dispatch: any) => {
    dispatch(toggleInLoading(true, true))
    let data: any = await getBooks(searchText, selectCategory, selectSorting, 0)
    dispatch(setBooks(data.items))
    dispatch(setTotalCount(data.totalItems))
    dispatch(setCurrentQueryParameters(searchText, selectCategory, selectSorting))
    dispatch(toggleInLoading(false, true))
}

export const setMoreBooksThunkCreator = (searchText: string, selectCategory: string, selectSorting: string, startIndex: number) => async (dispatch: any) => {
    dispatch(toggleInLoading(true, false))
    const data: any = await getBooks(searchText, selectCategory, selectSorting, startIndex)
    dispatch(setMoreBooks(data.items))
    dispatch(toggleInLoading(false, false))
}

export default booksListReducer
