import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Route, Switch, useHistory } from "react-router-dom";
import WordBoxList from './WordBoxList'
import SingleBox from './singleBox/SingleBox'
import styled from "styled-components";
import AddWord from "./AddWord"
import { useSelector, useDispatch } from "react-redux";
import {
  loadWordFB
} from "./redux/modules/word";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const is_loaded = useSelector(state => state.word.is_loaded);

  const [my_lists, set_my_lists] = useSelector((state) => state.word.list)

  React.useEffect( () => {
    console.log("useEffect, App.js")
    dispatch(loadWordFB());
  }, []);

  const addWord = () => {
    history.push("/addWord")
  }

  return (
    <div className="App">
      <Container>
        <Switch>
          <Route path="/" exact>
            <WordBoxList />
            <button onClick={addWord}>추가하기</button>
          </Route>
          <Route path="/detail/:index">
            <SingleBox/>
          </Route>
          <Route path="/addWord">
            <AddWord></AddWord>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export default App;
