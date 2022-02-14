import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { addWord } from "./redux/modules/word";
import { useDispatch, useSelector } from "react-redux";


const AddWord = (props) => {
    const text = React.useRef(null);
    const history = useHistory();
    const dispatch = useDispatch();

    const addWordFuncInChild = () => {
        const temp = {text : text.current.value, completed : false}

        dispatch(addWord(temp))
        history.goBack();
    }


    return (
        <div>
            <input type="text" ref={text} />
            <button onClick={addWordFuncInChild}>추가하기</button>
        </div>
    );
  };

  export default AddWord;