import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { addWordFB } from "./redux/modules/word";
import { useDispatch, useSelector } from "react-redux";


const AddWord = (props) => {
    const text = React.useRef(null);
    const explain = React.useRef(null);
    const example = React.useRef(null);
    const history = useHistory();
    const dispatch = useDispatch();

    const addWordFuncInChild = () => {
        const temp = { text: text.current.value, explain: explain.current.value, example: example.current.value , completed: false }

        dispatch(addWordFB(temp))
        history.goBack();
    }


    return (
        <div>
            <div>
               단어 <input type="text" ref={text} />
            </div>
            <div>
               설명 <input type="text" ref={explain} />
            </div>
            <div>
               예시 <input type="text" ref={example} />
            </div>
            <button onClick={addWordFuncInChild}>추가하기</button>
        </div>
    );
};

export default AddWord;