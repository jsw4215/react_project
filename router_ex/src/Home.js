import React from "react";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  let history = useHistory();
  return (
    <>
      <div>메인 화면이에요.</div>

      <button
        onClick={() => {
          history.push("/cat");
        }}
      >
        cat으로 가기
      </button>
    </>
  );
};

export default Home;