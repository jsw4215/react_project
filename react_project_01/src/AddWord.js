import React from "react";
import { useParams, useHistory } from "react-router-dom";

const AddWord = (props) => {
    const text = React.useRef(null);
    const history = useHistory();


    const addWordFuncInChild = () => {
        const temp = {text : text.current.value, completed : false}

        props.addWordFunc(temp);
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