/* 
레시피 재료 추가하기
*/

// DOM 엘리먼트 선택
const $table = document.querySelector("table");
const $ingredient_form = document.querySelector("#ingredient-form");
const $submit_button = document.querySelector("#submit_button");
const $ingredient = document.querySelector("input[name = ingredient]");
const $weight = document.querySelector("input[name = weight]");

// 테이블의 윗부분은 그대로 남겨둬야하니 처음부터 저장해두는 헤더부분입니다.
const $table_header = $table.innerHTML;

// 들고있을 재료와 무게의 정보를 가지고있는 배열(데이터)입니다.
let handlingList = [];

// 들고있는 장바구니 목록을 업데이트 합니다.
$ingredient_form.addEventListener("submit", (event) => {
  event.preventDefault();
  addhandlingList($ingredient.value, $weight.value);
});

// 제출한 리스트를 업데이트 합니다.
$submit_button.addEventListener("click", (event) => {
  event.preventDefault();
  updateReportListDOM();
});

// 들고있는 주문서에 추가를 하는 액션
const addhandlingList = (ingredient, weight) => {
  // 전달받은 데이터들을 검사를 하는 계산
  if (checkInputhandling(ingredient, weight, handlingList)) {
    // 들고있는 데이터들을 보내는 액션
    handlingList = sendData(ingredient, weight, handlingList);
    // 가지고 있는 주문서를 업데이트 해주는 액션
    updateListDOM();
  } else {
    // 안내문구 출력 액션
    alert("중복되었거나 이름을 입력하지 않았습니다.");
  }
  // 해당 데이터에 접근해 빈값으로 바꿔주는 액션
  $ingredient.value = "";
  $weight.value = "";
};

// 들고있는 주문서를 인덱스 번호를 통해 삭제를 하는 액션
const deletedhandlingList = (deleteId) => {
  handlingList = deleteByIndex(deleteId);
  updateListDOM();
};

// 들고있는 주문서를 만드는 액션
const updateListDOM = () => {
  $table.innerHTML =
    $table_header +
    handlingList
      .map((item, i) => {
        return `<tr><td>${item.ingredient}</td><td>${item.weight}</td><td><button data-role =${i} name='deleted-btn'>삭제</button></td></tr>`;
      })
      .join("");

  const $deleted = document.querySelectorAll("button[name=deleted-btn]");
  // 주문서가 새로 생길때마다 다시 가져오고 이벤트를 다시 부여해주는 선택자

  $deleted.forEach((deletedBtn) => {
    deletedBtn.addEventListener("click", (e) => {
      deletedhandlingList(parseInt(e.target.getAttribute("data-role")));
    });
  });
};

// 새로운 제출(레포트)를 만드는 액션
const updateReportListDOM = () => {
  const report_view = document.querySelector("#ingredient-list");
  report_view.innerHTML = handlingList
    .map((list) => {
      return `<li>${list.ingredient} : ${list.weight} </li>`;
    })
    .join("");
};

// 계산은 전역 변수를 사용하지 않아 다른 곳에서도 재사용이 가능하고 테스트를 하기 쉽습니다.

// 많은 계산들을 가지고 와서 전부다 맞는지 한번 더 확인하는 계산
function checkInputhandling(ingredient, weight, handlingList) {
  return (
    checkNameDuplication(ingredient, handlingList) &&
    checkEmptyString(ingredient) &&
    checkEmptyString(weight)
  );
}

// 리스트안에 중복된 재료명이 있는지 계산
function checkNameDuplication(ingredient, lists) {
  const new_list = lists.filter((list) => list.ingredient === ingredient);
  return new_list.length === 0;
}

// 들어온 문자가 빈값인지 검사해주는 계산
function checkEmptyString(string) {
  return string.trim().length > 0;
}

// 값들을 받아 객체에 담아서 보내주는 계산
function sendData(ingredient, weight, handlingList) {
  const new_list = handlingList.slice();
  new_list.push({ ingredient: ingredient.trim(), weight: weight.trim() });
  return new_list;
}

// 인덱스 번호로 삭제하는 계산
function deleteByIndex(deleteId) {
  const new_list = handlingList.filter((item, i) => i !== deleteId);
  return new_list;
}
