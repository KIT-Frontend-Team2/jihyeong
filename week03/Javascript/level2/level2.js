import { RESERVATION_LIST } from "./reservation .js";
// console.log(RESERVATION_LIST);
/* 
예약 고객확인하기
*/
// 값들을 가져올 form을 선택자로 가져오고 각 버튼도 가져와 버튼에 이벤트를 준다.
const $form = document.querySelector("form");
const $input = document.querySelectorAll("input");
// printSelect는 값을 innerHTML로 보여줄 선택자이다.
const $printSelect = document.querySelector("#reservation-number");
// 일치하는 값이 있는지 없는지 받아온 데이터와 비교를 한다.
$form.addEventListener("submit", (e) => {
  e.preventDefault();
  let result = check($input[0].value, $input[1].value);
  //3.  일치하는 값이 없으면 alert가 출력이 된다. 만약 참이라면 받아온 result에서 number를 뽑아준다.
  if (result.length !== 0) {
    $printSelect.innerHTML = result[0].number;
  } else {
    alert("일치하는 내역이 없습니다.");
    $printSelect.innerHTML = "일치하는 내역이 없습니다.";
  }
});
// 이름과 연락처를 받아와 filter를 통해서 결과를 반환해주는 함수.
const check = (name, phone) => {
  const result = RESERVATION_LIST.filter((item) => item.name === name && item.phone === phone);
  return result;
};
