document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".title").textContent = "제목아니다.";
});

// 1. 문제 3) 함수
sum(5, 7);

function sum(num1, num2) {
  console.log(num1 + num2);
}

// 2. 문제 4) 조건문
isEvenOrOdd(10);

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("짝수입니다");
  } else {
    console.log("홀수입니다.");
  }
}

// 3. 문제 5) 변수
let name = "병수";
let age = 20;

console.log("이름 :", name);
console.log("나이 :", age);
