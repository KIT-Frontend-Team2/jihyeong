import { BANK_LIST, ACCOUNT_FORM } from "./account.js";

// 배열 초기화
const BANK_LIST_ARRAY = Object.values(BANK_LIST);
const ACCOUNT_FORM_ARRAY = Object.values(ACCOUNT_FORM);

// DOM 엘리먼트 선택
const $select = document.querySelector("#bank-selector");
const $send_form = document.querySelector("#account-send-form");
const $list = document.querySelector("#account-list");
const $account_input = document.querySelector("#account-input");
let bank_list = [];

// 페이지가 로드될 때 은행 선택 목록을 업데이트합니다.
window.onload = () => {
  $select.innerHTML = BANK_LIST_ARRAY.map((item) => {
    return `<option value="${item}">${item}</option>`;
  }).join("");
};

// 양식을 제출할 때 새 계좌를 목록에 추가하고 목록을 업데이트합니다.
$send_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const bankValue = $select.value;
  const accountValue = $account_input.value;
  accountListAdded(bank_list, bankValue, accountValue, 12);
  listUpdate();
  $account_input.value = "";
});

// 새 계좌를 목록에 추가하는 함수입니다.
const accountListAdded = (List, Bank, Account, checkNumber) => {
  if (checkStringLength(Account, checkNumber)) {
    const newAccount = changeNewAccountNumber(
      getValueWithArrayIndex(BANK_LIST_ARRAY, Bank, ACCOUNT_FORM_ARRAY),
      Account,
      2
    );
    List.push([Bank, newAccount]);
  } else {
    alert("글자수가 12자리수가 아닙니다.");
  }
};

// 목록을 업데이트하는 함수입니다.
const listUpdate = () => {
  $list.innerHTML = bank_list
    .map((list) => {
      return `
        <li>
          ${list[0]} : ${list[1]}
        </li>`;
    })
    .join("");
};

// 새 계좌 번호를 변경하는 함수입니다.
function changeNewAccountNumber(changeCharinListindex, prevString, dontChangeRange) {
  const newString = prevString
    .split("")
    .reduce((accumulator, current, index) => {
      if (findIndexAllinString(changeCharinListindex, "-").includes(accumulator.length)) {
        accumulator.push("-");
      }
      if (index < dontChangeRange || index >= prevString.length - dontChangeRange) {
        accumulator.push(current);
      } else {
        accumulator.push("*");
      }
      return accumulator;
    }, [])
    .join("");
  return newString;
}

// 문자열 길이를 확인하는 함수입니다.
function checkStringLength(checkString, count) {
  return checkString.length === count;
}

// 배열에서 특정 키의 값(value)을 찾아 반환하는 함수입니다.
function getValueWithArrayIndex(KeyList, FindKey, ValueList) {
  const result = ValueList[KeyList.indexOf(FindKey)];
  return result;
}

// 문자열에서 모든 인덱스(index)를 찾아 배열로 반환하는 함수입니다.
function findIndexAllinString(String, Char) {
  const result = String.split("").reduce((accumulator, current, index) => {
    if (current === Char) {
      accumulator.push(index);
    }
    return accumulator;
  }, []);

  return result;
}
