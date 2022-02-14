import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


const UpdateSingle = (props) => {

    const history = useHistory();
    const idx = props.index;
    const lst = useSelector(state => state.word.list);
    const reftext = React.useRef(null)

    const updateWordInGrandChild = () => {
        const temp = { text: reftext.current.value, completed: false }

        props.updateWordInChild(temp, idx);
        history.goBack();
    }

    console.log("UpdateSingle : ", idx, lst)

    return (
        <div>
            <input type="text" ref={reftext} placeholder={lst[idx].text} />
            <button onClick={updateWordInGrandChild}>수정하기</button>
        </div>
    );
};

export default UpdateSingle;