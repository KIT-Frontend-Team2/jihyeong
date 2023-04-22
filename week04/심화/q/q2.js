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
// let totalItemCount = MockPosts(보여줄게시글갯수).length;

// 한 페이지에 보여질 갯수 설정
const 한페이지에보여줄갯수 = 10;

// 버튼 만들기
let 버튼 = new Array(보여줄게시글갯수 / 한페이지에보여줄갯수).fill("");
버튼 = 버튼.map((v, i, arr) => (arr[i] = i + 1));

// 현재 페이지에 맞는 번호들만 보이기
const renderingPage = () => {
  document.querySelector("#select-page").innerHTML = 버튼
    .filter((index) => Math.ceil(page / 10 - 1) * 10 < index && index <= Math.ceil(page / 10) * 10)
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
document.querySelector("#page-status").innerHTML = `${page} 번째 페이지입니다.`;

// 처음 페이지
document.querySelector("#first").addEventListener("click", () => {
  if (page !== 1) {
    location.href = "q2.html?selectPost=1";
    renderingPage();
  }
});
// 이전 페이지
document.querySelector("#prev").addEventListener("click", () => {
  if (page !== 1) {
    location.href = `q2.html?selectPost=${page - 1}`;
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

window.onload = () => {
  rendering(writeList);
};

function rendering(list) {
  const new_lists = makeList(list, page);
  isFirst = true;
  show_page.innerHTML = new_lists;
  BtnAddEvent();
}

const $form = document.querySelector("form.new.post-list");
const [cancelBtn, addBtn] = document.querySelectorAll("form .submit button");
// 리스트에 데이터 추가하기
$form.addEventListener("submit", (e) => {
  e.preventDefault();
});
addBtn.addEventListener("click", (c) => {
  const new_title = document.querySelector("#title").value;
  const new_content = document.querySelector("#content").value;
  const new_date = new Date();
  const new_id = User.id;
  const new_nickName = User.nickName;
  const new_profileImg = User.profileImg;
  writeList = [
    {
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
    },
    ...writeList,
  ];
  rendering(writeList);
  $form.classList.add("off");
  document.querySelector("#title").value = "";
  document.querySelector("#content").value = "";
});
cancelBtn.addEventListener("click", () => {
  $form.classList.add("off");
});

// 새롭게 만들어진 버튼들에게 이벤트를 부여하는 함수
function BtnAddEvent() {
  const $writeBtn = document.querySelector(".write-btn"); // 글쓰기 버튼
  const $listDeleteBtn = document.querySelectorAll(".post-delete"); // 글 삭제하기 버튼
  const $updateBTN = document.querySelectorAll(".post-update"); // 글쓰기 업데이트 버튼
  const $input_text = document.querySelectorAll(".reply-input"); // 댓글을 등록 버튼
  const $replyOpenBtn = document.querySelectorAll(".repliesOn"); // 댓글 보기 버튼
  const $replyCloseBtn = document.querySelectorAll(".repliesOff"); // 댓글 보기취소 버튼
  const $updateBtn = document.querySelectorAll(".repliesUpdate"); // 댓글 수정 버튼
  const $deleteBtn = document.querySelectorAll(".repliesDelete"); // 댓글 삭제 버튼

  // 댓글 수정
  $updateBtn.forEach((c) => {
    c.addEventListener("click", (e) => {
      const updatedCommentId = parseInt(c.parentElement.getAttribute("data-role"));
      const updatedListNumber = parseInt(c.parentElement.getAttribute("page"));
      const 미리보기 = writeList[updatedListNumber + (page - 1) * 10].Comments.filter(
        (e) => e.id === updatedCommentId
      );
      e.target.parentNode.parentNode.parentNode.innerHTML = `<div>
        <div class="updateMsgBox">
        <input type='text' id='updateMsg' value='${미리보기[0].content}'>
        </div>
        <div page="${updatedListNumber}" class="$updateBtnBox">
        <button class='update-clear'>완료</button>
        <button class='update-cancel'>취소</button>
      </div>
      </div>`;

      BtnAddEvent();
      const $updateCompletedBtn = document.querySelectorAll(".update-clear"); // 댓글 수정완료 버튼
      const $updateCancelBtn = document.querySelectorAll(".update-cancel"); // 댓글 수정 취소 버튼
      // 댓글 수정 완료
      $updateCompletedBtn.forEach((v, i) => {
        v.addEventListener("click", (e) => {
          const updatedListNumber = parseInt(e.target.parentElement.getAttribute("page"));
          let changTarget = writeList[updatedListNumber + (page - 1) * 10].Comments.find(
            (e) => e.id === parseInt(c.parentElement.getAttribute("data-role"))
          );
          changTarget.content = document.querySelector("#updateMsg").value;
          makeComment();
          BtnAddEvent();
        });
      });

      // 댓글 수정 취소
      $updateCancelBtn.forEach((e) => {
        e.addEventListener("click", () => {
          makeComment();
          BtnAddEvent();
        });
      });
    });
  });
  // 댓글 삭제
  $deleteBtn.forEach((data) => {
    data.addEventListener("click", (c) => {
      const deletedCommentId = parseInt(c.target.parentElement.getAttribute("data-role"));
      const deletedListNumber = parseInt(c.target.parentElement.getAttribute("page"));
      writeList[deletedListNumber + (page - 1) * 10].Comments = writeList[
        deletedListNumber + (page - 1) * 10
      ].Comments.filter((d) => d.id !== deletedCommentId);
      makeComment();
      BtnAddEvent();
    });
  });

  // 리스트 추가하기 버튼을 보이게 하기
  $writeBtn.addEventListener("click", () => {
    $form.classList.remove("off");
  });

  // 댓글 보이게하기
  $replyOpenBtn.forEach((item, i) =>
    item.addEventListener("click", (e) => {
      $replyOpenBtn[i].parentNode.classList.remove("off");
      $replyOpenBtn[i].parentNode.classList.add("on");
    })
  );

  // 댓글 안보이게하기
  $replyCloseBtn.forEach((item, i) =>
    item.addEventListener("click", () => {
      $replyCloseBtn[i].parentNode.classList.remove("on");
      $replyCloseBtn[i].parentNode.classList.add("off");
    })
  );

  // 글 삭제하기
  $listDeleteBtn.forEach((c) =>
    c.addEventListener("click", (e) => {
      const deleteId = parseInt(e.target.getAttribute("data-role"));
      writeList = writeList.filter((v) => v.id !== deleteId);
      rendering(writeList);
    })
  );

  // 글 수정하기
  $updateBTN.forEach((e) => {
    e.addEventListener("click", (c) => {
      const updateId = parseInt(c.target.getAttribute("data-role"));
      document.querySelector("#title").value = writeList.filter((e) => e.id === updateId)[0].title;
      document.querySelector("#content").value = writeList.filter(
        (e) => e.id === updateId
      )[0].content;
      writeList = writeList.filter((v) => v.id !== updateId);
      rendering(writeList);
      document.querySelector("form").classList.remove("off");
    });
  });

  // 댓글을 객체에 등록해주기
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
      writeList[(page - 1) * 10 + i].Comments.push(list);
      list = {};
      c.target[0].value = "";
      makeComment();
      BtnAddEvent();
    });
  });

  // 댓글 innerHTML 접근해서 렌더링 해주는 함수
  const makeComment = () => {
    const $repliesList = document.querySelectorAll(".comment-box"); // 해당 댓글 innerHTML 접근
    $repliesList.forEach(
      (list, i) => (list.innerHTML = commentRendering(writeList[(page - 1) * 10 + i].Comments, i))
    );
  };
}

// 리스트를 만들어주는 함수
function makeList(arr, page) {
  const render_total_number = page - 1;
  const result = arr
    .slice(render_total_number * 10, (render_total_number + 1) * 10)
    .map((item, i) => {
      const comment = commentRendering(item.Comments, i);
      return `
        <div class="post-list">
        <div class="action-bar">
        ${
          User.id === item.User.id
            ? `
          <button class="post-delete" page="${i}" data-role="${item.id}">삭제</button>
          <button class="post-update" page="${i}" data-role="${item.id}">수정</button>
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
function commentRendering(arr, listNumber) {
  const pageNumber = listNumber;
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
      <div page="${pageNumber}" data-role='${comments.id}'>
      ${
        User.id === comments.User.id
          ? `<button  class="repliesUpdate">수정</button><button   class="repliesDelete">삭제</button>`
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
