import React from "react";
import { useParams, useHistory } from "react-router-dom";

const ReadSingle = (props) => {

    const idx = props.index;
    const lst = props.list_data;

    console.log("ReadSingle : ", idx, lst)

    return (
        <div>
            <div>
                단어 <h1>{lst[idx] ? lst[idx].text : ""}</h1>
            </div>
            <div>
                설명 <h1>{lst[idx] ? lst[idx].explain : ""}</h1>
            </div>
            <div>
                예시 <h1>{lst[idx] ? lst[idx].example : ""}</h1>
            </div>
        </div>
    );
};

export default ReadSingle;