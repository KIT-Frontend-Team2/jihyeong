/* 
레시피 재료 추가하기
*/

// 들고있을 데이터 목록
let handlingList = [];

// 서버의 데이터 목록
let serverList = [];

// 값들을 가져올 form을 선택자로 가져오고 각 버튼도 가져와 버튼에 이벤트를 준다.
const $form = document.querySelector("#ingredient-form");
const $input = document.querySelectorAll("input");

// table의 innerHTML에 접근하기 위햇 해당 $tableinner를 선택자로 가져왔다.
const $tableinner = document.querySelector("table");

// 기존의 column들을 받아올 $title이라는 변수를 선언해주었다.
const $title = $tableinner.innerHTML;

// 1. 재료명과 용량을 추가한다.

// 해당 input내의 값이 변경될 때마다 target의 value를 업데이트 해준다.
$input.forEach((v, i) =>
  v.addEventListener("change", (e) => {
    $input[i].value = e.target.value;
  })
);

// 2. 해당 데이터를 handlingList에 올려준다

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { 재료명, 용량 } = { 재료명: $input[0].value, 용량: $input[1].value };
  //trim()을 통해서 공백을 제거해주고 해당 글자의 길이를 확인한다.
  if (재료명.trim().length !== 0 && 용량.trim().length !== 0) {
    // 해당 재료명을 가지고 handlingList에서 동일한 값이 있는지 검사한다.
    if (-1 == handlingList.findIndex((item) => item.재료명 === 재료명)) {
      handlingList = [...handlingList, { 재료명, 용량 }];
      rendering();
    } else {
      alert("중복된 재료명입니다.");
    }
  } else {
    alert("값을 입력해주세요");
  }

  // 잘못입력되었거나 보낼시 input내의 값을 초기화를 해준다.
  $input[0].value = "";
  $input[1].value = "";
});

// 들고있는 데이터 목록을 가지고있는 배열에 따라서 뿌려주는 함수
function rendering() {
  const newtableinner =
    $title +
    handlingList
      .map((list) => {
        return `<tr data-role=${list.재료명} class="thead">
      <th>${list.재료명}</th>
      <th>${list.용량}</th>
      <th><button type='button' class='deleteBtn' value='삭제'>삭제</button></th>
      </tr>`;
      })
      .join("");

  // 위에서 선택자로 가져왔던 객체에 map을 통해서 해당 innerHTML을 수정을 해준다.
  // 단 title의 경우 기존에 있던것을 사용해야하기에 기존에 저장해 두었던 $title을 쓴다.
  $tableinner.innerHTML = newtableinner;

  // 새롭게 만들어진 deleteBtn 들을 전부 가져와 준다. (렌더링이 될 때마다 가져오는것이 달라진다.)
  const $deleteBtn = document.querySelectorAll(".deleteBtn");
  $deleteBtn.forEach((btn) => {
    // 각 버튼들을 가져와 클릭(눌러졌을 때) 상위요소(th) 상위요소(tr)의 data-role로 넣어둔 재료명을 가져온다.
    // 여기서 재료명은 중복이 될 수 없으므로 키와 같은 값어치를 가진다.
    btn.addEventListener("click", (e) => {
      const deletekey = e.target.parentElement.parentElement.getAttribute("data-role");
      deleted(deletekey);
    });

    // deleted 함수를 통해 인자로 넘겨진 deletekey(재료명)에 해당하지 않는 값들만 filter를 통해 재할당 시킨다.
    // 이후 다시 렌더링을 해준다.
    const deleted = (deletekey) => {
      handlingList = handlingList.filter((item) => item.재료명 !== deletekey);
      rendering();
    };
  });
}

// 3. 제출시 handlinglist에 내용이 serverList에 내용과 같아진다.

// 값을 보내 줄 수 있는 버튼과 값을 보여줄 아이디를 가져왔다.
const $제출btn = document.querySelector("#submit_button");
const $targetinnerHTML = document.querySelector("#ingredient-list");

$제출btn.addEventListener("click", (e) => {
  e.preventDefault();
  serverListRender();
});

// 제출한 데이터 목록 handlingList에 따라서 새롭게 innerHTML을 수정해주는 함수
const serverListRender = () => {
  $targetinnerHTML.innerHTML = handlingList
    .map((item) => {
      return `<li>${item.재료명} : ${item.용량}</li>`;
    })
    .join("");
};

// 요구사항.

// 이름이 중복이 되면 안된다 -완료-

// 삭제버튼을 누를시 해당 hanlinglist에 데이터가 사라진다. -완료-
