import React from "react";
import s from "./BookViewPage.module.css"
import MainPreloader from "../../Assets/Preloader/MainPreloader";
import {NavLink} from "react-router-dom";

type PropsType = {
    title: string, img: string,
    subtitle: string, categories: Array<string>,
    authors: Array<string>, description: string,
    loadInProgress: boolean,
    publisher: string, publishedDate: string
}

export const renderHTMLContent = (htmlContent:string) =>
    React.createElement('div', {
        dangerouslySetInnerHTML: { __html: htmlContent},
    });

const BookViewPage = ({title, img, subtitle, categories, authors, description, loadInProgress,
                          publisher, publishedDate}: PropsType) => {

    const categoriesList = categories?.length > 1 ? categories.map((c) => <span key={c}>{`${c}; `}</span>) :
        <span>{categories}</span>

    const authorsList = authors?.length > 1 ? authors.map((a) => <span key={a}>{`${a}; `}</span>) :
        <span>{authors}</span>


    if (loadInProgress) {
        return <div className={s.preloadWrap}><MainPreloader size={100}/></div>
    }

    return (
        <div className={s.wrapper}>
            <div className={s.bookInfoBar}>
                <div className={s.bookImg}><img
                    src={img}
                    alt=""/>
                </div>
                <div className={s.bookInfo}>
                    <div className={s.title}><h3>{title}</h3></div>
                    <div className={s.subtitle}><span>{subtitle}</span></div>
                    <div className={s.categories}>{categoriesList}</div>
                    <div className={s.authors}>{authorsList}</div>
                    <div className={s.publisher}>{publisher}</div>
                    <div className={s.publishedDate}>{publishedDate}</div>
                </div>
            </div>
            <div className={s.description}><span>{description ? renderHTMLContent(description): "No description"}</span></div>
            <div className={s.goBack}>
                <NavLink to="/"><img
                    src="https://cdn2.iconfinder.com/data/icons/simple-circular-icons-line/84/Left_Arrow_-512.png"
                    alt=""/></NavLink>
            </div>
        </div>
    )
}

export default BookViewPage