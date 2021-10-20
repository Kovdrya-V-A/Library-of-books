import s from "./searchBar.module.css"
import React, {useState} from "react";
import {getBooks} from "../../DAL/ApiRequests";


const SearchBar = ({onSetBooks}) => {
    return (
        <div className={s.wrapper}>
            <h1>Search for books</h1>
            <div className={s.searchInput}><input type="text"/> <button onClick={() => {
                onSetBooks("java")
            }} className={s.searchBtn}>Search</button></div>
            <div className={s.selectors}><p>Categories</p>
                <select className={s.selectCategory}>
                    <option>All</option>
                    <option>JS</option>
                    <option>PHP</option>
                </select>
                <p>Sorting by</p>
                <select  className={s.selectSort}>
                    <option>popularity</option>
                    <option>price</option>
                </select></div>
        </div>
    )
}

export default React.memo(SearchBar)