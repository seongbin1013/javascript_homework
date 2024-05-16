// 1. 컨테이너를 가져온다
// 2. 클릭 이벤트가 발생한 요소가 박스 클래스가 있는지 확인하고
// 3. 확인을 거치고 박스가 있다면 클래스명을 있다면 때주고 없으면 붙여줌. toggle

const container = document.querySelector("#container");

container.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.classList.contains("box")) {
    e.target.classList.toggle("clicked");
  }
});

// 2번
function getSquare(number) {
  // number의 제곱을 계산하여 반환하는 함수를 작성하세요.
  return number ** 2;
}

const result = getSquare(5);
console.log(result); // 25 출력 (5의 제곱)
