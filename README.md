<h3 align="center"><b>항해99 주특기 1주차 React 프로젝트, 나만의 단어장</b></h3>

<h4 align="center">📆 2022.02.11 ~ 2022.02.17</h4>
<br>
<br>

## 📌 소개

|장석우|
|:----:|
|<img src="https://avatars.githubusercontent.com/u/46017029?v=4" alt="avatar" height="150px" width="150px" /> |

<br>

---

<h3><b>🎫 프로젝트 소개 🎫</b></h3>
- "리액트로 만든 나만의 단어장" <br>
- React, Redux, Firebase를 이용하여 나만의 단어장을 만들어보자!!
<br><br> 

---

<br>
<h3 align="center"><b>🛠 Tech Stack 🛠</b></h3>
<p align="center">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/aws-232F3E?style=for-the-badge&logo=firebase&logoColor=white">
</br>
<img src="https://img.shields.io/badge/react-375BD2?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/redux-3CBDB1?style=for-the-badge&logo=redux&logoColor=white">
<img src="https://img.shields.io/badge/firebase-FFCC33?style=for-the-badge&logo=firebase&logoColor=white">
<img src="https://img.shields.io/badge/typescript-945DD6?style=for-the-badge&logo=typescript&logoColor=white">
</br>
<img src="https://img.shields.io/badge/reactrouterdom-375BD2?style=for-the-badge&logo=reactrouterdom&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-181717?style=for-the-badge&logo=styledcomponents&logoColor=white">


<br><br>
<h3 align="center"><b>🎬 Getting Started 🎬</b></h3>
<pre>
<code>
~$ cd react_project_01_with_firebase_and_redux
~$ yarn add react-router-dom
~$ yarn add react-redux
~$ yarn add styled-components
~$ yarn start
</code>
</pre>

<br>
<h3 align="center"><b>📂 Project Directory Structure 📁</b></h3>
<pre>
<code>
src/
┣ addWord/
┃ ┗ AddWord.js
┣ redux/
┃ ┣ modules/
┃ ┃ ┗ word.js
┃ ┗ configStore.js
┣ singleBox/
┃ ┣ readSingle/
┃ ┃ ┣ ReadSingle.js
┃ ┃ ┗ ReadSingle.jsx
┃ ┣ SingleBox.js
┃ ┗ UpdateSingle.js
┣ App.css
┣ App.js
┣ App.test.js
┣ firebase.js
┣ index.css
┣ index.js
┣ logo.svg
┣ reportWebVitals.js
┣ setupTests.js
┗ WordBoxList.js
</code>
</pre>
<br>
<br>


---


<br>
<h3 align="center"><b>📢 Main function 📢</b></h3>
<br>
<h4><b>📰 Index Page 📰</b></h4>

<table width="100%">
    <tr>
        <td width="50%"><img src="" /></td>
        <td width="50%">
            <h5></h5>
            <ul>
                <li>JWT 방식으로 구현</li>
                <li>회원가입 버튼 클릭 시 회원가입 UI로 변경</li>
            </ul>
        </td>
    </tr>
</table>


---


<br>
<h4><b>📰 Join Membership Page 📰</b></h4>

<table width="100%">
    <tr>
        <td width="50%"><img src="https://user-images.githubusercontent.com/48196352/149292881-26320151-a136-43a1-8a36-763a5ab88b25.JPG" /></td>
        <td width="50%">
            <h5>회원가입</h5>
            <ul>
                <li>아이디 중복확인 시 아이디 입력여부, 형식, 중복 아이디 체크</li>
                <li>비밀번호 2번 입력으로 비밀번호 형식, 일치 여부 체크</li>
            </ul>
        </td>
    </tr>
</table>


---


<br>
<h4><b>📰 Movie Main Page 📰</b></h4>

<table width="100%">
    <tr>
        <td width="50%"><img src="" /></td>
        <td width="50%">
            <h5>메인 화면</h5>
            <ul>
                <li>리덕스를 이용하여 Firebase FireStore에 저장된 값 로드하기</li>
                <li>리액트 라우터 돔을 이용하여 각 페이지 라우팅</li>
                <li>스타일드 컴포넌트를 이용한 디자인구현</li>
            </ul>
        </td>
    </tr>
</table>


---

<br>
<h4><b>📰 SingleBox Page 📰</b></h4>
<table width="100%">
    <tr>
        <td width="50%"><img src="" /></td>
        <td width="50%">
            <h5>상세 화면</h5>
            <ul>
                <li>조건문과 state를 이용한 글 삭제/수정 분기 구현</li>
                <li>styled-components와 데이터 처리부 분리 구현</li>
                <li>리덕스 툴킷 적용한 데이터 생성/읽기/삭제/수정 구현</li>
            </ul>
        </td>
    </tr>
</table>

<br><br>

---

<br><br>

<h3 align="center"><b>🏷 Firebase  🏷</b></h3>

#### Word

|Actions|Params - to|Params - from|Role|
|:--:|:--:|:--:|:--:|
|word/CREATE| {text, explain, example} |{id}|생성|
|word/LOAD| - | list[...{text, explain, example}] |읽기|
|word/UPDATE|{id, text, explain, example}| - |수정|
|word/DELETE|{id}| - |삭제|


<br><br>


---


<h3 align="center"><b>✏ Trouble Shooting ✏</b></h3>
<br>
<details>
    <summary>
        <b>ajax로 데이터를 받아오고 화면으로 뿌려줄 때, 비동기로 작동하기 때문에 
요소들이 생성되기전에 dom에 접근하게 되어 UI를 다루기가 쉽지 않았습니다. </b>
    </summary>
    <br>해결 : 순차적으로 실행되 접근할 수 있게끔 ajax메서드 안에서 작성해서 해결했습니다.
</details>
<details>
    <summary>
        <b>순환 참조(임포트) 문제
개별 파이썬 파일 작업으로 blueprint를 사용하였는데
ex) app.py <- detail.py
이때 detail에서도 app.py를 임포트 할 경우 에러가 발생하였다. </b>
    </summary>
    <br>해결 : 전역으로 임포트 하지 않고 함수내에서 임포트 하는 방법으로 해결
</details>
