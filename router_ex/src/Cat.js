//Cat.js
import React from "react";
import { useParams } from "react-router-dom";


const Cat = (props) => {

    console.log(props.match);
    const cat_name = useParams();
    console.log(cat_name);

    return (
        <div>고양이 화면이에요.</div>
    )
}

export default Cat;