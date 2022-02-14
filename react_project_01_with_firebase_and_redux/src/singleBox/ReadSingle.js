import React from "react";
import { useParams, useHistory } from "react-router-dom";

const ReadSingle = (props) => {

    const idx = props.index;
    const lst = props.list_data;
    
    console.log("ReadSingle : ", idx, lst)

    return (
    <div>
        <h1>{lst[idx] ? lst[idx].text : ""}</h1>
    </div>
);
};

export default ReadSingle;