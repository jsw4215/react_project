import React from "react";
import { useParams, useHistory } from "react-router-dom";

const UpdateSingle = (props) => {

    const history = useHistory();
    const idx = useParams();
    const lst = props.list_data;
    const text = React.useRef(null)

    const updateWordInGrandChild = () => {
        const temp = { text: text.current.value, completed: false }

        props.updateWordInChild(temp);
        history.goBack();
    }

    console.log("UpdateSingle : ", idx, lst)

    return (
        <div>
            <input type="text" ref={text} placeholder={lst[idx].text} />
            <button onClick={updateWordInGrandChild}>수정하기</button>
        </div>
    );
};

export default UpdateSingle;