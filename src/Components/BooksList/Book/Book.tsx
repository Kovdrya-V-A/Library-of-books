import s from "./Book.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

type PropsType = {
    title: string,
    img: string,
    authors: Array<string>,
    category: string,
    id: string
}

const Book = ({title, img, authors, category, id}: PropsType) => {
    const authorsList = authors?.length > 1 ? authors.map((a) => <span key={a}>{`${a}; `}</span>) : <span>{authors}</span>


    return (
        <div className={s.wrapper}>
            <NavLink
                to={`/Book/${id}`}>
                <div className={s.cardBar}>
                    <div className={s.imgBar}><img src={img} alt="smallImg"/></div>
                    <div className={s.categoriesBar}><p>{category}</p></div>
                    <div className={s.titleBar}><p>{title}</p></div>
                    <div className={s.authorBar}><p>{authorsList}</p></div>
                </div>
            </NavLink>
        </div>
    )
}

export default React.memo(Book)