// 문제 8) 로컬스토리지 사용하기
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

// 8-1
localStorage.setItem("user", JSON.stringify(user));

// 8-2
console.log(JSON.parse(localStorage.getItem("user")));

// 8-3.
const 유저 = JSON.parse(localStorage.getItem("user"));
let userList = { ...유저, 나이: 30 };

localStorage.setItem("user", JSON.stringify(userList));

// 8-4.
console.log(localStorage.removeItem("user"));

// 문제 1) 아래 API 문서를 확인하고, 게시물 목록을 조회하여 콘솔에 출력해보세요.

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));
