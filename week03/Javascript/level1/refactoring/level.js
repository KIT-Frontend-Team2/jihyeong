import { BANK_LIST, ACCOUNT_FORM } from "./account.js";

const BANK_LIST_ARRAY = Object.values(BANK_LIST);
const ACCOUNT_FORM_ARRAY = Object.values(ACCOUNT_FORM);

const $select = document.querySelector("#bank-selector");
const $send_form = document.querySelector("#account-send-form");
const $list = document.querySelector("#account-list");
const $account_input = document.querySelector("#account-input");
let bank_list = [];

window.onload = () => {
  $select.innerHTML = BANK_LIST_ARRAY.map((item) => {
    {
      return `<option value="${item}">${item}</option>`;
    }
  }).join("");
};

$send_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const bankValue = $select.value;
  const accountValue = $account_input.value;
  accountListAdded(bank_list, bankValue, accountValue, 12);
  listUpdate();
  $account_input.value = "";
});

const listUpdate = () => {
  $list.innerHTML = bank_list
    .map((list) => {
      return `<li>${list[0]} : ${list[1]}</li>`;
    })
    .join("");
};

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

/**
 *
 * @param {Array} changeCharinListindex
 * @param {String} prevString
 * @returns String
 */
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

/**
 *
 * @param {String} checkString
 * @param {Number} count
 * @returns boolean
 */
function checkStringLength(checkString, count) {
  return checkString.length === count;
}

/**
 *
 * @param {Array} KeyList
 * @param {String} FindKey
 * @param {Array} ValueList
 * @returns FindKey width ValuList
 */
function getValueWithArrayIndex(KeyList, FindKey, ValueList) {
  const result = ValueList[KeyList.indexOf(FindKey)];
  return result;
}

/**
 *
 * @param {String} String
 * @param {Char} Char
 * @returns Findindex(char) in Array
 */
function findIndexAllinString(String, Char) {
  const result = String.split("").reduce((accumulator, current, index) => {
    if (current === Char) {
      accumulator.push(index);
    }
    return accumulator;
  }, []);

  return result;
}
