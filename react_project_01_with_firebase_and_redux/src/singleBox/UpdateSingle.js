import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


const UpdateSingle = (props) => {

    const history = useHistory();
    const idx = props.index;
    const lst = useSelector(state => state.word.list);
    const reftext = React.useRef(null)
    const explain = React.useRef(null)
    const example = React.useRef(null)

    const updateWordInGrandChild = () => {
        const temp = { id: lst[idx].id, text: reftext.current.value, explain: explain.current.value, example: example.current.value, completed: false }

        props.updateWordInChild(temp);
        history.goBack();
    }

    console.log("UpdateSingle : ", idx, lst)

    return (
        <div>
            <div>
                단어 <input type="text" ref={reftext} placeholder={lst[idx].text} />
            </div>
            <div>
                설명 <input type="text" ref={explain} placeholder={lst[idx].explain} />
            </div>
            <div>
                예시 <input type="text" ref={example} placeholder={lst[idx].example} />
            </div>
            <button onClick={updateWordInGrandChild}>수정하기</button>
        </div>
    );
};

export default UpdateSingle;