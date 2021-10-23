import axios from "axios";

const APIkey = "AIzaSyAgGQCPUkvMw_K2PcwOcxaM4orog57jj-k"
const URL = "https://www.googleapis.com/books/v1/volumes"

export const getBooks = (searchText: string, selectCategory: string, selectSorting: string, startIndex: number) => {

    if (selectCategory == "all") {
        return axios.get(`${URL}?q=${searchText || "."}&orderBy=${selectSorting}&maxResults=30&startIndex=${startIndex}&key=${APIkey}`)//Endpoint не обрабатывает пустое значение обязательного параметра q(текст запроса)
            .then(response => {
                return response.data
            })
    } else {
        return axios.get(`${URL}?q=${searchText}+subject:${selectCategory}&orderBy=${selectSorting}&maxResults=30&startIndex=${startIndex}&key=${APIkey}`)
            .then(response => {
                return response.data
            })
    }
}

export const getSelectedBook = (bookId: number) => {
    return axios.get(`${URL}/${bookId}`)
        .then(response => {
            return response.data
        })
}



