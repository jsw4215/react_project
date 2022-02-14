import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";


const WordBox = (props) => {
    const word_lists = props.list_data
    const history = useHistory();

    return (
      <ListStyle>
        {word_lists.map((list, index) => {
          return (
            <ItemStyle completed={list.completed} className="list_item" key={index} onClick={() => {
              history.push("/detail/"+index);
            }}>
              {list.text}
            </ItemStyle>
          );
        })}
      </ListStyle>
    );
  };
  
  const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 50vh;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 50vh;
    background-color: #20B2AA;
  `;
  
  const ItemStyle = styled.div`
    padding: 16px;
    margin: 8px;
    color: ${(props) => props.completed? "#2F4F4F": "darkslategray"};
    background-color: ${(props) => (props.completed ? "#fff" : "white")};
  `;
  
  export default WordBox;