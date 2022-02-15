import React from "react";
import {BrowserRouter} from "react-router-dom";
import { useParams, useHistory, Switch, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ReadSingle from "./ReadSingle"
import UpdateSingle from "./UpdateSingle"


const SingleBox = (props) => {
    const history = useHistory();
    const params = useParams();
    const idx = params.index;
    const word_list = props.list_data;
    const text = React.useRef(null)

    const [status, setStatus] = React.useState("read")


    const deleteWordInChild = () => {
        props.deleteWordFunc(idx)
        history.goBack()
    }

    const goUpdate = () => {
        if (!isEditing){
        setStatus("edit")
        }else{
            props.updateWordFunc(text.current.value, idx)
            history.goBack()
        }
    }

    let isEditing = status==="edit"

    console.log("isEditing : ",isEditing, status)

    return (
            <div>
                {!isEditing&&<h1>{word_list[idx] ? word_list[idx].text : ""}</h1>}
                {isEditing&&<input type="text" ref={text} placeholder={word_list[idx].text} />}

                <Button
                    variant="outlined"
                    color="primary"
                    onClick={goUpdate}
                >
                    수정하기
                </Button>
                {!isEditing&&
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={deleteWordInChild}
                >
                    삭제하기
                </Button>
                }
            </div>
    );
};

export default SingleBox;