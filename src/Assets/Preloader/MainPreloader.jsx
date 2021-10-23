import React from "react";

import Preloader from "./Preloader.gif"

const MainPreloader = ({size}) => {
    return (
        <img src={Preloader} alt="Preloader"  height={size}
             width={size}/>
    )
}

export default MainPreloader