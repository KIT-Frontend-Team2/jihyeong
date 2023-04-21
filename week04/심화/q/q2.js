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
따라서 게시글 추가 시 올라가는 이미지의 속성인 Post_img의 경우 빈배열로 두거나 빈 값으로 두시면 됩니다 :)

게시글 작성과 댓글 작성 시 작성자의 프로필 이미지는 본인이 원하는 대체 이미지로 고정하여 대체 하시면 됩니다.

본인이 작성한 게시글과 댓글에만 수정과 삭제 버튼이 보여야합니다.
삭제, 수정 버튼의 기능은 모두 적상적으로 기능이 작동 되어야합니다.

-----------------------------------------------------------------------------------------
*/

import { MockPosts } from "./faker.js";

let writeList = MockPosts(200);

// 로그인 유무 확인
const isLogin = true;

if (isLogin) {
  document.querySelector(".write-btn").classList.remove("off");
}

// 현재 로그인한 유저 정보
const User = {
  id: 10000,
  nickName: "JiHyeong",
  profileImg: "IMG_6059.jpg",
};

const searchParams = new URLSearchParams(location.search);
let postNumber = searchParams.get("selectPost");
if (postNumber === null) {
  postNumber = 1;
}
// 랜더링 되는 페이지
const select_page = document.querySelector("#page-list");

// 현재 고른 게시글
const 게시물 = parseInt(postNumber);

// 현재 페이지
const now_page = Math.ceil(게시물 / 10) - 1;

// 게시글 갯수 설정
const 보여줄게시글갯수 = 200;
let totalItemCount = MockPosts(보여줄게시글갯수).length;

// 한 페이지에 보여질 갯수 설정
const 한페이지에보여줄갯수 = 10;

// 버튼 만들기
let 버튼 = new Array(totalItemCount).fill("");
버튼 = 버튼.map((v, i, arr) => (arr[i] = i + 1));

// 현재 페이지에 맞는 번호들만 보이기
document.querySelector("#select-page").innerHTML = 버튼
  .filter((index) => index > now_page * 10 && index <= (now_page + 1) * 10)
  .map((index) => {
    if (index === 게시물) {
      return `<li class="select")><button>${index}</button></li>`;
    } else {
      return `<li onclick="location.href='q2.html?selectPost=${index}'")><button>${index}</button></li>`;
    }
  })
  .join("");

// 현재 페이지 보여주기
document.querySelector("#page-status").innerHTML = `${게시물} 번째 게시물입니다.`;

// 처음 페이지
document.querySelector("#first").addEventListener("click", () => {
  if (게시물 !== 1) {
    location.href = "q2.html?selectPost=1";
  }
});
// 이전 페이지
document.querySelector("#prev").addEventListener("click", () => {
  if (게시물 !== 1) {
    location.href = `q2.html?selectPost=${게시물 - 1}`;
  }
});

// 다음 페이지
document.querySelector("#next").addEventListener("click", () => {
  location.href = `q2.html?selectPost=${게시물 + 1}`;
});
// 마지막 페이지
document.querySelector("#last").addEventListener("click", () => {
  location.href = `q2.html?selectPost=${totalItemCount}`;
});

// 내가 작성한 글 목록

const $form = document.querySelector("form");
$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const [추가, 취소] = document.querySelectorAll("form .submit button");

  취소.addEventListener("click", (c) => {
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
    rendering();

    closeButton();
    e.target[0].value = "";
    e.target[1].value = "";
  });

  추가.addEventListener("click", (c) => {
    c.preventDefault();
    closeButton();
    e.target[0].value = "";
    e.target[1].value = "";
  });
});

function closeButton() {
  document.querySelector("form").classList.add("off");
}

// 현재 페이지 렌더링
const rendering = () => {
  const new_lists = makeList(writeList, 게시물);

  select_page.innerHTML = new_lists;

  // 글 삭제하기
  const deleteBTN = document.querySelectorAll(".post-delete");
  deleteBTN.forEach((c) =>
    c.addEventListener("click", (e) => {
      const deleteId = parseInt(e.target.getAttribute("data-role"));
      writeList = writeList.filter((v) => v.id !== deleteId);
      rendering();
    })
  );

  // 글 수정하기
  const updateBTN = document.querySelectorAll(".post-update");
  updateBTN.forEach((e) => {
    e.addEventListener("click", (c) => {
      const updateId = parseInt(c.target.getAttribute("data-role"));
      alert("수정시 이전에 작성한 내용은 삭제됩니다.");
      writeList = writeList.filter((v) => v.id !== updateId);
      document.querySelector("form").classList.remove("off");
    });
  });

  makeComment(writeList, 게시물);

  BtnAddEvent();
};
const BtnAddEvent = () => {
  const $replyOpenBtn = document.querySelectorAll(".repliesOn");
  const $replyCloseBtn = document.querySelectorAll(".repliesOff");

  $replyOpenBtn.forEach((item, i) =>
    item.addEventListener("click", (e) => {
      $replyOpenBtn[i].parentNode.classList.remove("off");
      $replyOpenBtn[i].parentNode.classList.add("on");
    })
  );

  $replyCloseBtn.forEach((item, i) =>
    item.addEventListener("click", (e) => {
      $replyCloseBtn[i].parentNode.classList.remove("on");
      $replyCloseBtn[i].parentNode.classList.add("off");
    })
  );

  document.querySelector(".write-btn").addEventListener("click", () => {
    document.querySelectorAll("form")[0].classList.remove("off");
  });

  const updatesBtn = document.querySelectorAll(".repliesUpdate");
  updatesBtn.forEach((c) => {
    c.addEventListener("click", (e) => {
      const 미리보기 = writeList[게시물 - 1].Comments.filter(
        (e) => e.id === parseInt(c.parentElement.getAttribute("data-role"))
      );
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
      updatesBtn.forEach((v) => {
        v.addEventListener("click", (e) => {
          let changTarget = writeList[게시물 - 1].Comments.find(
            (e) => e.id === parseInt(c.parentElement.getAttribute("data-role"))
          );
          changTarget.content = document.querySelector("#updateMsg").value;
          makeComment(writeList, 게시물);
          BtnAddEvent();
        });
      });

      document.querySelector(".update-cancel").addEventListener("click", () => {
        makeComment(writeList, 게시물);
        BtnAddEvent();
      });
    });
  });

  const deleteBtn = document.querySelectorAll(".repliesDelete");

  deleteBtn.forEach((e) => {
    e.addEventListener("click", () => {
      writeList[게시물 - 1].Comments = writeList[게시물 - 1].Comments.filter(
        (c) => c.id !== parseInt(e.parentElement.getAttribute("data-role"))
      );
      makeComment(writeList, 게시물);
      BtnAddEvent();
    });
  });
};

// 댓글을 등록해주는 함수
function makeComment(writeList, 게시물) {
  document.querySelector(".replies-list").innerHTML = commentRendering(writeList[게시물 - 1]);

  document.querySelector(".reply-input").addEventListener("submit", (e) => {
    e.preventDefault();
    const new_comment_User = User;
    const new_comment_content = e.target[0].value;
    const new_comment_createAt = new Date();
    const new_comment_id = Math.floor(Math.random() * 100000);
    writeList[게시물 - 1].Comments.push({
      User: new_comment_User,
      content: new_comment_content,
      createdAt: new_comment_createAt,
      id: new_comment_id,
      myComment: true,
    });
    makeComment(writeList, 게시물);
    BtnAddEvent();
  });
}

// 리스트를 만들어주는 함수
function makeList(arr, 게시물번호) {
  const result = arr
    .slice(게시물번호 - 1, 게시물번호)
    .map((item) => {
      const comment = commentRendering(item);
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
       <ul class ="replies-list off">
       ${comment}
       </ul>
    </div>`;
    })
    .join("");

  return result;
}

function commentRendering(arr) {
  const comment = arr.Comments.map((comments) => {
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
              ? `
          <button class="repliesUpdate">수정</button>
          <button class="repliesDelete">삭제</button>
          `
              : ""
          }
          </div>
          </div>
          </li>
          `;
  }).join("");

  const reply = `
    <button class="repliesOn">댓글 보기</button>
    <button class="repliesOff">닫기</button>${comment}
    <form class="reply-input">
      <label for='reply-input-box'>
      <div class="reply-text-box">
        <input type="text" id='reply-input-box'/>
        <div class="reply-submit">
          <button>등록</button>
        </div>
      </div>
      </label>
    </form>
`;
  return reply;
}

rendering();
