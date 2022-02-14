import logo from './logo.svg';
import './App.css';
import { Route, Switch, useHistory } from "react-router-dom";
import WordBoxList from './WordBoxList'
import SingleBox from './singleBox/SingleBox'
import styled from "styled-components";
import AddWord from "./AddWord"
import { useState } from 'react';

function App() {
  const history = useHistory();
  const dummy = [{ text: "test", completed: "False" }, { text: "test2", completed: "False" }]


  const [my_lists, set_my_lists] = useState(dummy)


  const addWordFunc = (new_word) => {
    set_my_lists([...my_lists, new_word])
  };

  const deleteWordFunc = (idx) => {

    const temp_list = my_lists.filter((lst, index) => {
      console.log("index : ",index)
      console.log("idx : ",idx)
      return parseInt(index) != idx;
    })

    console.log("temp_list : ",temp_list)

    set_my_lists(temp_list);
  }

  const updateWordFunc = (update_word) => {
    
  }

  const addWord = () => {
    history.push("/addWord")
  }

  return (
    <div className="App">
      <Container>
        <Switch>
          <Route path="/" exact>
            <WordBoxList list_data={my_lists} />
            <button onClick={addWord}>추가하기</button>
          </Route>
          <Route path="/detail/:index">
            <SingleBox list_data={my_lists} deleteWordFunc={deleteWordFunc} />
          </Route>
          <Route path="/addWord">
            <AddWord addWordFunc={addWordFunc}></AddWord>
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
