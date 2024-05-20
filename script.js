const lists = [
  {
    이름: "철수",
    나이: 19,
    성별: "남",
  },
  {
    이름: "짱구",
    나이: 20,
    성별: "남",
  },
  {
    이름: "유리",
    나이: 21,
    성별: "여",
  },
];
console.log(lists);

// 문제 2.
const listContainer = document.querySelector(".list-Container");
const Name = document.querySelectorAll(".name");
const Age = document.querySelectorAll(".age");
const Gender = document.querySelectorAll(".gender");

lists.forEach((list) => {
  let html = `<div class="container"> 
    <h1 class="name">${list.이름}</h1>
    <h2 class="age">${list.나이}</h2>
    <h3 class="gender">${list.성별}<h3>
    </div>`;
  listContainer.innerHTML += html;
});

// 문제 3. find
const girl = lists.find((gender) => {
  return gender.성별 === "여";
});

console.log(girl);

// 문제 4. filter
const mans = lists.filter((man) => {
  return man.성별 === "남";
});

console.log(mans);

// 문제 5. map
const plusAge = lists.map((age) => {
  return age.나이 + 10;
});

console.log(plusAge);

// 문제 6.
const arrange = [...lists].sort((a, b) => {
  return b.나이 - a.나이;
});

console.log(arrange);
console.log(lists);

// 문제 7. destructuring 문법
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

const { 이름, 나이, 주소 } = user;

console.log(user); // "시골"
