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

    const deleteWordInChild = () => {
        props.deleteWordFunc(idx)
        history.goBack()
    }

    const updateWordInChild = (word) => {
        props.updateWordFunc(word)
        history.goBack()
    }

    const goUpdate = () => {
        history.push("/detail/update/"+idx)
    }

    return (
        <BrowserRouter>
            <div>

                <Switch>
                    <Route path="/detail/:idx" exact>
                        <ReadSingle index={idx} list_data={word_list} />
                    </Route>
                    <Route path="/detail/update/:idx">
                        <UpdateSingle index={idx} list_data={word_list} updateWordInChild={updateWordInChild} />
                    </Route>
                </Switch>

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
        </BrowserRouter>
    );
};

export default SingleBox;