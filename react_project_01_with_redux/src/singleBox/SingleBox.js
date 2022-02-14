import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useParams, useHistory, Switch, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ReadSingle from "./ReadSingle"
import UpdateSingle from "./UpdateSingle"
import { useDispatch, useSelector } from "react-redux";
import { deleteWord, updateWord } from "../redux/modules/word";


const SingleBox = (props) => {
    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();
    const idx = params.index;
    const word_list = useSelector(state => state.word.list);
    const [status, setStatus] = React.useState("read")

    const deleteWordInChild = () => {
        dispatch(deleteWord(idx))
        history.goBack()
    }

    const updateWordInChild = (word_obj, idx) => {
        dispatch(updateWord(word_obj, idx))
        history.goBack()
    }

    const goUpdate = () => {
        if (!isEditing) {
            setStatus("edit")
        }
    }

    let isEditing = status === "edit"


    return (
        <div>
            {!isEditing && <ReadSingle index={idx} list_data={word_list} />}
            {isEditing && <UpdateSingle index={idx} list_data={word_list} updateWordInChild={updateWordInChild} />}

            <Button
                variant="outlined"
                color="primary"
                onClick={goUpdate}
            >
                수정하기
            </Button>
            <Button
                variant="outlined"
                color="secondary"
                onClick={deleteWordInChild}
            >
                삭제하기
            </Button>

        </div>
    );
};

export default SingleBox;