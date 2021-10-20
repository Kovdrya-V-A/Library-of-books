import axios from "axios";

const APIkey = "AIzaSyAgGQCPUkvMw_K2PcwOcxaM4orog57jj-k"

export const getBooks = (searchText) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchText || "javascript"}&maxResults=30&key=${APIkey}`)
        .then(response => {
            return response.data
        })
}


