import s from "./Book.module.css";
import React, {memo} from "react";


const Book = ({title, img, author, categories}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.imgBar}><img src={img} alt="smallImg"/></div>
            <div className={s.categoriesBar}><p>{categories}</p></div>
            <div><p>{title}</p></div>
            <div className={s.authorBar}><p>{author}</p></div>
        </div>
    )
}

export default React.memo(Book)