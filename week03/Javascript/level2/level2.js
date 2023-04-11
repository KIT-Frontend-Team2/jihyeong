import { RESERVATION_LIST } from "./reservation .js";
// console.log(RESERVATION_LIST);

/* 
예약 고객확인하기


*/

const $form = document.querySelector("form");
const $input = document.querySelectorAll("input");
const $printresult = document.querySelector("#reservation-number");

$input.forEach((e) => e.setAttribute("value", ""));
document.querySelector("button").setAttribute("type", "submit");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  let result = check($input[0].value, $input[1].value);
  if (result.length !== 0) {
    $printresult.innerHTML = result[0].number;
  } else {
    alert("일치하는 내역이 없습니다.");
    $printresult.innerHTML = "일치하는 내역이 없습니다.";
  }
});

$input.forEach((v, i) =>
  v.addEventListener("change", (e) => {
    $input[i].value = e.target.value;
  })
);

const check = (name, phone) => {
  const result = RESERVATION_LIST.filter((item) => item.name === name && item.phone === phone);
  return result;
};
