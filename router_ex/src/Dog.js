import React from "react";

const Dog = (props) => {
  // props의 history 객체를 살펴봅시다.
  console.log(props);

  // 그리고 history.push('/home')으로 페이지 이동도 해봐요!

  return (
    <div
      onClick={() => {
        props.history.push("/home");
      }}
    >
      강아지 화면이에요.
    </div>
  );
};

export default Dog;