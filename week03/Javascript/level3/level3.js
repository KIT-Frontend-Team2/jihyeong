/* 
레시피 재료 추가하기
*/

function rendering() {
  const newtableinner =
    $title +
    handlingList
      .map((list, i) => {
        return `<tr data-role=${list.재료명} class="thead">
      <th>${list.재료명}</th>
      <th>${list.용량}</th>
      <th><button type='button' class='deleteBtn'   value='삭제'>삭제</button></th>
      </tr>`;
      })
      .join("");

  $tableinner.innerHTML = newtableinner;

  const $deleteBtn = document.querySelectorAll(".deleteBtn");

  $deleteBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const deletedItem = e.target.parentElement.parentElement.getAttribute("data-role");
      deleted(deletedItem);
    });

    const deleted = (deletedItem) => {
      handlingList = handlingList.filter((item) => item.재료명 !== deletedItem);
      rendering();
    };
  });
}

let handlingList = [];
let serverList = [];

// 1. 재료명과 용량을 추가한다.

// 2. 해당 데이터를 handlingList에 올려준다

// 3. 제출시 handlinglist에 내용이 serverList에 내용과 같아진다.

// 요구사항.

// 이름이 중복이 되면 안된다

// 삭제버튼을 누를시 해당 hanlinglist에 데이터가 사라진다.

const $form = document.querySelector("#ingredient-form");
const $input = document.querySelectorAll("input");
const $tableinner = document.querySelector("table");
const $title = $tableinner.innerHTML;

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { 재료명, 용량 } = { 재료명: $input[0].value, 용량: $input[1].value };
  if (재료명.trim().length !== 0 && 용량.trim().length !== 0) {
    if (-1 == handlingList.findIndex((item) => item.재료명 === 재료명)) {
      handlingList = [...handlingList, { 재료명, 용량 }];
      rendering();
    } else {
      alert("중복된 재료명입니다.");
    }
  } else {
    alert("값을 입력해주세요");
  }
  $input[0].value = "";
  $input[1].value = "";
});

$input.forEach((v, i) =>
  v.addEventListener("change", (e) => {
    $input[i].value = e.target.value;
  })
);

const $제출btn = document.querySelector("#submit_button");
const $제출list = document.querySelector("#ingredient-list");

$제출btn.addEventListener("click", (e) => {
  e.preventDefault();
  serverListRender();
});

const serverListRender = () => {
  $제출list.innerHTML = handlingList
    .map((item) => {
      return `<li>${item.재료명} : ${item.용량}</li>`;
    })
    .join("");
};
