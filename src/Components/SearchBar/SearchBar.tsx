import s from "./searchBar.module.css"
import React, {useState} from "react";


type PropsType = {
    onSetBooks: (searchText: string, selectCategory:string, selectSorting:string) => void,
    firstLoadInProgress: boolean
}

const SearchBar = ({onSetBooks, firstLoadInProgress}: PropsType) => {

    let [searchText, setSearchText] = useState("")
    let [selectCategory, setCategory] = useState("all")
    let [selectSorting, setSorting] = useState("relevance")

    let onSetSearchText = (e:any) => {
        setSearchText(e.currentTarget.value)
    }

    let onSetCategory = (e:any) => {
        setCategory(e.target.value)
    }

    let onSetSorting = (e:any) => {
        setSorting(e.target.value)
    }

    return (
        <div className={s.wrapper}>
            <h1>Search for books</h1>
            <div className={s.searchInput}>
                <form><input value={searchText} onChange={onSetSearchText} type="text"/>
                    <button type="submit" disabled={firstLoadInProgress} onClick={() => {
                        onSetBooks(searchText, selectCategory, selectSorting)
                    }} className={s.searchBtn}><img
                        src="https://www.downloadclipart.net/large/search-button-png-hd-photo.png" alt=""/>
                    </button>
                </form>
            </div>
            <div className={s.selectors}>
                <div>
                    <p>Categories</p>
                    <select value={selectCategory} onChange={onSetCategory} className={s.selector}>
                        <option value="all">All</option>
                        all, art, biography, computers, history, medical, poetry
                        <option value="art">Art</option>
                        <option value="biography">Biography</option>
                        <option value="computers">Computers</option>
                        <option value="history">History</option>
                        <option value="medical">Medical</option>
                        <option value="poetry">Poetry</option>
                    </select>
                </div>
                <div>
                    <p>Sorting by</p>
                    <select value={selectSorting} onChange={onSetSorting} className={s.selector}>
                        <option value="relevance">Relevance</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default React.memo(SearchBar)