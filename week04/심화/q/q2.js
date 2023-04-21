/* 
-----------------------------------------------------------------------------------------

백엔드 없이 게시판 만들기

-----------------------------------------------------------------------------------------

문제1. 페이지네이션 만들기
총 아이템의 갯수는 totalItemCount개 입니다.
해당 갯수를 토대로 한 페이지당 10개의 Post가 보이는 페이지네이션을 구현해주세요

단, 현재 총 아이템의 갯수는 200개이며 10개씩 보여준다면 총 20개의 페이지가 나와야합니다.
그러나 이 개수는 언제든 변화될 수 있으며 만약 해당 갯수가 변화된다면 페이지네이션도 변경되어야합니다.

요구사항
1.
1~20의 페이지를 한번에 보여주는 것이 아닌 10페이지 단위로 페이지를 보여주어야하며
10페이지에서 마지막 페이지를 클릭한다면 11~20페이지가 보여야합니다

ex)
1~10 > 다음버튼 > 11~20

각 버튼의 좌우의 끝에는 맨처음 페이지로 이동할 수 있는 버튼과
맨끝으로 이동할 수 있는 버튼이 있어야합니다.

2. 
페이지를 누르면 페이지에 맞는 번호가 하이라이트 되어야합니다.
또한, 새로고침 시에도 이 focus효과는 유지되어야합니다.

ex) 현재 페이지5
<<(맨처음) <(이전) 1 2 3 4 [5] 6 7 8 9 10 (다음)> (마지막)>>
        
5에 focus효과 새로고침 이후에도 5에는 focus효과가 유지되어야합니다.


3.  
페이지를 눌러 이동 되었을 때 동일한 데이터를 불러올 수 있는 backend가 없으므로
MockPosts를 함수를 활용하여 새로운 10개의 랜덤한 게시물을 보여주셔야 합니다.

-----------------------------------------------------------------------------------------

문제2. 게시글 CRUD 구현하기
게시글 구성에 필요한 가상 데이터를 생성하는 함수 MockPosts는 안에 넣은 인자의 갯수만큼 가상의 포스트 데이터를 생성하는 함수입니다.
해당 함수의 상세 데이터는 제가 상단에 console.log를 통해 출력해두었으니 개발자 도구로 확인해보세요 :)

요구사항
1.
게시글은 페이스북 혹은 인스타그램의 형태로 한 페이지에 10개씩 보이게 됩니다.
댓글은 토글 형태로 "댓글 보기"를 클릭해야만 해당 댓글을 확인할 수 있습니다.

2. 
각 게시물과 댓글에는 내가 작성한 글인지 알 수 있는 flag가 들어있으며
현재 기존에 작성된 모든 가상 데이터의 해당 flag는 false입니다.
그러나 만약 본인이 새로운 게시글과 댓글을 작성한다면 해당 flag는 true의 형태가 되어야합니다.

3.
페이지네이션과 함께 게시글의 CRUD 구현하기
게시글을 작성할 수 있습니다. 댓글을 작성할 수 있습니다. 새로운 게시글은 내가 작성한 것이기에 flag는 true입니다.

* 주의)
백엔드가 존재하지 않기 때문에 파일 업로드 기능을 구현할 수 없기에 사진을 업로드 할 수 없습니다.
따라서 게시글 addBtn 시 올라가는 이미지의 속성인 Post_img의 경우 빈배열로 두거나 빈 값으로 두시면 됩니다 :)

게시글 작성과 댓글 작성 시 작성자의 프로필 이미지는 본인이 원하는 대체 이미지로 고정하여 대체 하시면 됩니다.

본인이 작성한 게시글과 댓글에만 수정과 삭제 버튼이 보여야합니다.
삭제, 수정 버튼의 기능은 모두 적상적으로 기능이 작동 되어야합니다.

-----------------------------------------------------------------------------------------
*/

import { MockPosts } from "./faker.js";

let writeList = MockPosts(200).map((v, i) => {
  return {
    key: i,
    ...v,
    Comments: [
      ...v.Comments.map((c) => ({
        key: i,
        ...c,
      })),
    ],
  };
});

// 로그인 유무 확인
const isLogin = true;

if (isLogin) {
  document.querySelector(".write-btn").classList.remove("off");
}
let isFirst = false;
// 현재 로그인한 유저 정보
const User = {
  id: 10000,
  nickName: "JiHyeong",
  profileImg: "IMG_6059.jpg",
};
let page = 1;
// 현재 페이지
const searchParams = new URLSearchParams(location.search);
const select_page = searchParams.get("selectPost");
if (select_page === null) {
  page = 1;
} else {
  page = parseInt(select_page);
}

// 게시글 갯수 설정
const 보여줄게시글갯수 = writeList.length;
let totalItemCount = MockPosts(보여줄게시글갯수).length;

// 한 페이지에 보여질 갯수 설정
const 한페이지에보여줄갯수 = 10;

// 장수
const total = Math.ceil(page / 10);
// 버튼 만들기
let 버튼 = new Array(보여줄게시글갯수 / 한페이지에보여줄갯수).fill("");
버튼 = 버튼.map((v, i, arr) => (arr[i] = i + 1));

// 현재 페이지에 맞는 번호들만 보이기
const renderingPage = () => {
  document.querySelector("#select-page").innerHTML = 버튼
    .filter((index) => (total - 1) * 10 < index && index <= total * 10)
    .map((index) => {
      if (page === index) {
        return `<li class="select")><button>${index}</button></li>`;
      } else {
        return `<li onclick="location.href='q2.html?selectPost=${index}'")><button>${index}</button></li>`;
      }
    })
    .join("");
};
renderingPage();
// 현재 페이지 보여주기
document.querySelector("#page-status").innerHTML = `${total} 번째 페이지입니다.`;

// 처음 페이지
document.querySelector("#first").addEventListener("click", () => {
  if (total !== 1) {
    location.href = "q2.html?selectPost=1";
    renderingPage();
  }
});
// 이전 페이지
document.querySelector("#prev").addEventListener("click", () => {
  if (total !== 1) {
    location.href = `q2.html?selectPost=${index - 1}`;
    renderingPage();
  }
});

// 다음 페이지
document.querySelector("#next").addEventListener("click", () => {
  location.href = `q2.html?selectPost=${page + 1}`;
  renderingPage();
});
// 마지막 페이지
document.querySelector("#last").addEventListener("click", () => {
  location.href = `q2.html?selectPost=${보여줄게시글갯수 / 한페이지에보여줄갯수}`;
  renderingPage();
});

// 페이지네이션 종료

// 현재 보여지는 페이지 전체
const show_page = document.querySelector("#page-list");

// 현재 페이지 렌더링
function rendering(list) {
  const new_lists = makeList(list, total);
  isFirst = true;
  show_page.innerHTML = new_lists;
  BtnAddEvent();
  addComment();
}

window.onload = () => {
  rendering(writeList);
};

// 리스트 추가하기
const $form = document.querySelector("form.new.post-list");

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  const [addBtn, cancelBtn] = document.querySelectorAll("form .submit button");

  // 만들어진 리스트에 데이터 추가하기
  cancelBtn.addEventListener("click", (c) => {
    c.preventDefault();
    const new_title = e.target[0].value;
    const new_content = e.target[1].value;
    const new_date = new Date();
    const new_id = User.id;
    const new_nickName = User.nickName;
    const new_profileImg = User.profileImg;

    writeList.unshift({
      id: Math.floor(Math.random() * 100000),
      title: new_title,
      Comments: [],
      Post_img: [],
      User: {
        id: new_id,
        nickName: new_nickName,
        profileImg: new_profileImg,
      },
      content: new_content,
      createdAt: new_date,
      myPost: true,
    });

    rendering(writeList);

    closeButton();
    e.target[0].value = "";
    e.target[1].value = "";
  });

  addBtn.addEventListener("click", (c) => {
    c.preventDefault();
    closeButton();
    e.target[0].value = "";
    e.target[1].value = "";
  });
});

// 추가하기 취소하기
function closeButton() {
  $form.classList.add("off");
}

const repliesBtnEvent = () => {
  const updatesBtn = document.querySelectorAll(".repliesUpdate");
  updatesBtn.forEach((c, i) => {
    c.addEventListener("click", (e) => {
      console.log(e);
      const 미리보기 = writeList[(total - 1) * 10 + i].Comments.filter(
        (e) => e.id === parseInt(c.parentElement.getAttribute("data-role"))
      );
      console.log(미리보기);
      e.target.parentNode.parentNode.parentNode.innerHTML = `<div>
        <div class="updateMsgBox">
        <input type='text' id='updateMsg' value='${미리보기[0].content}'>
      </div>
      <div class="updateBtnBox">
      <button class='update-cancel'>취소</button>
      <button class='update-clear'>완료</button>
      </div>
      </div>`;

      const updatesBtn = document.querySelectorAll(".update-clear");
      updatesBtn.forEach((v, i) => {
        v.addEventListener("click", (e) => {
          console.log((total - 1) * 10 + i);
          let changTarget = writeList[(total - 1) * 10 + i].Comments.find(
            (e) => e.id === parseInt(c.parentElement.getAttribute("data-role"))
          );
          console.log(changTarget);
          changTarget.content = document.querySelector("#updateMsg").value;
          makeComment(i);
          BtnAddEvent();
        });
      });

      document.querySelector(".update-cancel").addEventListener("click", () => {
        console.log("283");
        makeComment(i);
        BtnAddEvent();
      });
    });
  });

  const deleteBtn = document.querySelectorAll(".repliesDelete");

  deleteBtn.forEach((e, i) => {
    e.addEventListener("click", () => {
      console.log("294");
      writeList[(total - 1) * 10 + i].Comments = writeList[(total - 1) * 10 + i].Comments.filter(
        (c) => c.id !== parseInt(e.parentElement.getAttribute("data-role"))
      );
      makeComment(i);
      BtnAddEvent();
    });
  });
};

// 새롭게 만들어진 버튼들에게 이벤트를 부여하는 함수
function BtnAddEvent() {
  // 리스트 추가하기 버튼을 보이게 하기

  const $writeBtn = document.querySelector(".write-btn");
  $writeBtn.addEventListener("click", () => {
    $form.classList.remove("off");
  });

  // 댓글 보이게하기
  const $replyOpenBtn = document.querySelectorAll(".repliesOn");
  $replyOpenBtn.forEach((item, i) =>
    item.addEventListener("click", (e) => {
      console.log("238");
      $replyOpenBtn[i].parentNode.classList.remove("off");
      $replyOpenBtn[i].parentNode.classList.add("on");
    })
  );

  // 댓글 안보이게하기
  const $replyCloseBtn = document.querySelectorAll(".repliesOff");
  $replyCloseBtn.forEach((item, i) =>
    item.addEventListener("click", () => {
      console.log("249");
      $replyCloseBtn[i].parentNode.classList.remove("on");
      $replyCloseBtn[i].parentNode.classList.add("off");
    })
  );

  // 글 삭제하기
  const deleteBTN = document.querySelectorAll(".post-delete");
  deleteBTN.forEach((c) =>
    c.addEventListener("click", (e) => {
      const deleteId = parseInt(e.target.getAttribute("data-role"));
      writeList = writeList.filter((v) => v.id !== deleteId);
      rendering(writeList);
    })
  );

  // 글 수정하기
  const updateBTN = document.querySelectorAll(".post-update");
  console.log(updateBTN);
  updateBTN.forEach((e) => {
    e.addEventListener("click", (c) => {
      console.log("316");
      const updateId = parseInt(c.target.getAttribute("data-role"));
      console.log(updateId);
      alert("수정시 이전에 작성한 내용은 삭제됩니다.");
      writeList = writeList.filter((v) => v.id !== updateId);
      document.querySelector("form").classList.remove("off");
    });
  });
  repliesBtnEvent();
}

// 댓글을 객체에 등록해주기
const addComment = () => {
  const $input_text = document.querySelectorAll(".reply-input");
  $input_text.forEach((item, i) => {
    item.addEventListener("submit", (c) => {
      c.preventDefault();
      const new_comment_User = User;
      const new_comment_content = c.target[0].value;
      const new_comment_createAt = new Date();
      const new_comment_id = Math.floor(Math.random() * 100000);
      let list = {
        key: i,
        User: new_comment_User,
        content: new_comment_content,
        createdAt: new_comment_createAt,
        id: new_comment_id,
        myComment: true,
      };
      writeList[(total - 1) * 10 + i].Comments.push(list);
      list = {};
      c.target[0].value = "";
      makeComment(i);
      addComment();
    });
  });
};

// 댓글 생성해주는 함수
const makeComment = (index) => {
  const $repliesList = document.querySelectorAll(".comment-box");
  $repliesList[index].innerHTML = commentRendering(writeList[(total - 1) * 10 + index].Comments);
  console.log(writeList[(total - 1) * 10 + index].Comments);
  repliesBtnEvent();
};

// 리스트를 만들어주는 함수
function makeList(arr, total) {
  const render_total_number = total - 1;
  console.log(arr);
  const result = arr
    .slice(render_total_number * 10, (render_total_number + 1) * 10)
    .map((item) => {
      const comment = commentRendering(item.Comments);
      return `
      <div class="post-list">
      <div class="action-bar">
      ${
        User.id === item.User.id
          ? `
          <button class="post-delete" data-role="${item.id}">삭제</button>
          <button class="post-update" data-role="${item.id}">수정</button>
        `
          : ""
      }
      </div>
      <div class="post-card">
        <h4 class="post-title"><img src="${item.User.profileImg}"  width='60px'  height='60px'/>
        <div>
        <span>
        ${item.title}
        </span>
        </div></h4>
        <div class="post-content">
        ${item.content}
        </div>
      </div>
        <div class="comment-box">
        ${comment}
        </div>
      </div>`;
    })
    .join("");
  isFirst = true;
  return result;
}

// 댓글을 만들어주는 함수
function commentRendering(arr) {
  const comment = arr
    .map((comments) => {
      const writerDate = new Date(comments.createdAt);
      const writerTime = `${writerDate.getFullYear()}.${writerDate.getMonth() + 1}.${
        writerDate.getDate() + 1
      }. ${writerDate.getHours()}:${writerDate.getMinutes()}`;
      return `
      <li class="reply-item">
        <div class="reply-user-info">
          <img src="${comments.User.profileImg}"  width='50px'  height='50px'/>
          <div class="reply-user-inner">
            <div>${comments.User.nickName}</div>
            <div class="reply-content">${comments.content}</div>
          </div>
        </div>
        <div class="reply-footer">
          <div class="reply-date">${writerTime}</div>
          <div data-role='${comments.id}'>
            ${
              User.id === comments.User.id
                ? `<button class="repliesUpdate">수정</button><button class="repliesDelete">삭제</button>`
                : ""
            }
          </div>
        </div>
      </li>
       `;
    })
    .join("");

  const randomKey = Math.floor(Math.random() * 100000);
  const reply = `
    <ul class="replies-list on">
      <button class="repliesOn">댓글 보기</button>
      <button class="repliesOff">닫기</button>
      ${comment}
      <form class="reply-input">
        <label for='reply-input-box${randomKey}'>
        <div class="reply-text-box">
          <input type="text" id='reply-input-box${randomKey}'/>
          <div class="reply-submit">
            <button>등록</button>
          </div>
        </div>
        </label>
      </form>
    </ul>
`;
  return reply;
}
