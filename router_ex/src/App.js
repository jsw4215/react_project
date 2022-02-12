import React from 'react';
import logo from './logo.svg';
import './App.css';
// Route를 먼저 불러와줍니다.
import { Route, Link } from "react-router-dom";

// 세부 페이지가 되어줄 컴포넌트들도 불러와주고요!
import Home from "./Home";
import Cat from "./Cat";
import Dog from "./Dog";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div>
          <Link to="/">Home으로 가기</Link>
          <Link to="/cat">Cat으로 가기</Link>
          <Link to="/dog">Dog으로 가기</Link>
        </div>
        {/* 실제로 연결해볼까요! */}
        <Route path="/" exact component={Home} />
        <Route path="/cat" component={Cat} />
        <Route path="/dog" component={Dog} />
      </div>
    );
  }
}

export default App;