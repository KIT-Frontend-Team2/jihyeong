// 모든 값들을 렌더링하기 위해 저장하는 배열 선언
let lists = [];

// 기존에 있던 값들은 안보여지게 하려면 시작하자마자 renderList를 통해 빈 배열을 보여준다 = 안보여준다.
window.onload = () => {
    renderList();
};

// input값을 선택자를 통해서 가져온다.
const $te_input = document.querySelector('#te_input');
// 키업. 버튼을 누르고 떼었을 때 이벤트를 추가해준다.
$te_input.addEventListener('keyup', (e) => {
    let value = e.target.value;
    // value값을 가져와 키보드에서 손을 떼었을 때 마지막 값이 숫자인지 검사를 한다.
    if (parseInt(value[value.length - 1]) == value[value.length - 1]) {
        // 만약 숫자를 입력하였다면 arlet로 경고문구가 출력이 되고 빈값으로 교체를 해준다.
        alert('숫자를 입력하였습니다.');
        e.target.value = '';
    }
});

// 값들을 가져올 form을 선택자로 가져오고 각 버튼도 가져와 버튼에 이벤트를 준다.
const $form = document.querySelector('#form');
const $sendBtn = document.querySelector('#send');
const $resetBtn = document.querySelector('button[type=reset]');

// 보내기. 즉 데이터를 입력했을때 값이 입력이 되지 않았으면 공백이 리스트에 올라가기에 검사를 해준다.
$form.addEventListener('submit', (e) => {
    // sumbit의 새로고침을 없애기 위해 preventDefault()를 사용해준다.
    e.preventDefault();

    // trim()을 사용해 white space (공백)을 제거한 후 해당 문자열의 길이가 0일시.
    // 즉 아무것도 입력하지 않았을시 경고 문구가 출력이 된다.
    if (e.target[0].value.trim() === '') {
        alert('아무것도 입력하지 않았습니다.');
        e.target[0].value = '';
    } else {
        // 만약 데이터의 길이가 0이 아니라면 e.target[0]을 통해 받아온 value 값을 list에 추가해준다.
        lists.push(e.target[0].value);

        // 이후 list를 다시 한 번 출력
        renderList();

        // 입력창에 공백을 넣어줌으로서 초기화를 시켜준다.
        e.target[0].value = '';
    }
});

// reset click 이벤트가 발생하였을 떄 lists에 새로운 배열을 할당 (초기화)를 한 이후 새로운 리스트를 렌더링해준다.
$resetBtn.addEventListener('click', (e) => {
    lists = new Array();
    renderList();
});

// 5.아래의 입력창에 입력 후 저장 버튼을 누르거나 엔터키를 누르면 입력한 내용이 아래의 list에 추가 되도록
// 초기화 버튼을 누르면 list안의 모든 내용이 지워져야 함

// ***렌더링 해주는 함수***

// 리스트를 렌더를 해줄 innerHTML을 제공할 ul태그를 가져와준다.
const $ul = document.querySelector('#list');

function renderList() {
    $ul.innerHTML = lists
        .map((list, i) => {
            return `<li key='${i}' class="liclass">${list} <button type="button" onclick='updatedhandling(this)' class="updateBtn">수정</button>
            <button onclick='deleteList(${i})' type="button" class="deleteBtn">삭제</button></li>`;
        })
        .join('');
    isUpdate = false;
}

// 6.추가된 내용을 "각 각" 수정 및 삭제 수 있게 변경하시오.

// isUpdate는 현재 업데이트 중인 상태인가를 알려주는 변수이다. 자기가 이미 활성화 상태라면 한번 더 못누르게 한다.
let isUpdate;

// updatedhandling을 호출하는 방법은 onclick으로 안에서 인라인내에서 이벤트로 this. 자신을 받아왔다.
// 여기서 e는 this를 의미한다.

updatedhandling = (e) => {
    // 수정을 누르고 취소를 눌러주었을 때 원래 값으로 돌아갈 수 있게 임시변수 temp를 선언을 해준다.
    const temp = e.parentElement.innerHTML;

    // 렌더링을 했을때 배열내의 인덱스 번호로 나눠주었던 key값을 가져온다.
    const targetId = e.parentElement.getAttribute('key');

    // 이번에도 만들때 인라인 이벤트를 주었다. 업데이트를 할 때 인자로 받아왔던 targetId를 넣어주었다. 이 targetId를 통해서 업데아트를 해줄 것이다.
    // retruend 함수는 어차피 이전상태를 보여주면 되기에 건네줄 인자가 필요가 없다.

    // 만약 업데이트가 진행중이면 또다른 수정이 열리지 않게 해준다.
    if (!isUpdate) {
        e.parentElement.innerHTML = `<input type='text' id='updateTarget'> <input onclick='updated(${targetId})' type='button' value='확인'> <input onclick='returned()' type='button' value='취소'>`;
        isUpdate = true;

        // targetId를 받아와 업데이트를 시켜준다.
        updated = (targetId) => {
            // 수정 상태는 한번밖에 될 수 없으니 updateTarget을 통해 값을 받아와준다.
            const target = document.querySelector('#updateTarget');

            // lists를 map을 돌아 새로은 lists로 할당해준다
            lists = lists.map((list, i) => {
                return i === targetId ? (list = target.value) : list;
            });

            // 수정이 되었다면 다시 한번 리스트 목록을 뽑아준다.
            renderList();
        };

        // 취소가 되었다면 다시 한번 리스트 목록을 뽑아준다.
        returned = () => {
            renderList();
        };
    }
};

// 삭제버튼을 누르면 인덱스 번호와 targetId의 번호가 같으니 해당 값을 제외한 나머지 값들만 보여준다.
deleteList = (e) => {
    lists = lists.filter((list, i) => i !== e);
    renderList();
};
