import { BANK_LIST, ACCOUNT_FORM } from "./account.js";

const $selects = document.querySelector("#bank-selector");
const $formData = document.querySelector("#account-send-form");
const $ul = document.querySelector("#account-list");
let account_list = [];

//  렌더링 해주는 함수
const listRender = () => {
  $ul.innerHTML = account_list
    .map((account) => {
      return `<li>${account.bankName} : ${account.accountNumber}</li>`;
    })
    .join("");
};

// 가져온 데이터로 select 내의 option을 만들어준다.
window.onload = () => {
  selectOptionlist();
};

// 정규 표현식을 사용하지 않고 암호화
/** 숫자를 받아서 해당 앞뒤 2개를 제외한 숫자들을 전부 *로 변경 그리고 -를 해당 위치에 삽입 */
const reqExpOnlyJs = (array) => {
  array = String(array);
  let splitArray = array.split("");
  let jsExp = ACCOUNT_FORM[Math.floor(Math.random() * Object.keys(ACCOUNT_FORM).length + 1)];
  let const_index = jsExp.split("").map((v, i) => (v === "-" ? i : undefined));
  let count = 0;
  let returnArray = const_index.map((v, i) => {
    if (const_index[i] !== undefined) {
      return "-";
    }
    let temp = count++;
    return temp < 2 || temp > 9 ? splitArray[temp] : "*";
  });
  return returnArray.join("");
};

// 가져온 데이터로 select 내의 option을 만들어준다.
const selectOptionlist = () => {
  let rederHTML = [];
  for (const key in BANK_LIST) {
    rederHTML.push(BANK_LIST[key]);
  }
  $selects.innerHTML = rederHTML
    .map((Bank) => {
      return `<option value=${Bank}>${Bank}</option>`;
    })
    .join("");
};

// 은행과 계좌번호 입력하기
$formData.addEventListener("submit", (e) => {
  e.preventDefault();
  // 문자열의 길이 검사
  if (e.target[1].value.length < 12) {
    alert("해당문자는 12자리가 아닙니다.");
  } else {
    account_list.push({
      bankName: `${e.target[0].value}`,
      accountNumber: `${reqExpOnlyJs(e.target[1].value)}`,
    });
    listRender();
  }
  e.target[1].value = "";
});

// 입력한 값이 숫자인지 확인하는 함수 (추가)
const $account_input = document.querySelector("#account-input");
// 키보드에서 손을 뗏을때 마지막으로 입력한 값이 숫자인지 확인.
$account_input.addEventListener("keyup", (e) => {
  let value = e.target.value;
  if (parseInt(value[value.length - 1]) != value[value.length - 1]) {
    alert("문자를 입력하였습니다.");
    e.target.value = "";
  }
});
