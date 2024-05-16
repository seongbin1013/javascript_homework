// 7. setInterval을 이용하여 1초에 1씩 카운트되게 만든 후,
// 카운트가 5가 되면 “종료”라는 콘솔로그가 출력되게 만들보세요. 단, clearInterval을 통해 카운트 5가 되면 현재 setInterval 함수를 종료해야 합니다.

let count = 0;

const timer = document.querySelector("#counter");

const intervalId = setInterval(() => {
  count++;
  timer.textContent = count;

  if (count === 5) {
    console.log("종료");
    clearInterval(intervalId);
  }
}, 1000);
