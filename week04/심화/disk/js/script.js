const musicListData = [
  {
    src: "./assets/img/iu_0.jpg",
    color: ["#0272a4", "#f6a564"],
  },
  {
    src: "./assets/img/iu_1.jpg",
    color: ["#b6bfc8", "#36595b"],
  },
  {
    src: "./assets/img/iu_2.jpg",
    color: ["#e58e82", "#6f569f"],
  },
];

const $Buttons = document.querySelectorAll(".play_btn_group button");
const $disk = document.querySelector(".disk");
const $ul_List = document.querySelector(".list_btn_group ul");
const $disk_inner = document.querySelector(".disk_inner");
const $main = document.querySelector("main");
const [$prev, $next] = document.querySelectorAll(".list_btn_group button");
let isChecked = false;
let play_list = -1;

const playList = musicListData.map((data, i) => {
  return { status: "none", id: i, ...data };
});

$ul_List.innerHTML = playList
  .map((data) => {
    return `
        <li>
        <img src='${data.src}' />
        </li>
        `;
  })
  .join("");
const $lis = document.querySelectorAll("li");

function changeCd() {
  isChecked = true;
  playList.forEach((v) => {
    v.status = "none";
  });
  playList[play_list].status = "active";
  console.log(play_list);
  $lis.forEach((v) => v.childNodes[1].classList.remove("play"));
  $lis[play_list].childNodes[1].classList.add("play");
  $main.setAttribute(
    "style",
    `background:linear-gradient(120deg, ${playList[play_list].color[0]}, ${playList[play_list].color[1]})`
  );
  $disk_inner.setAttribute("style", `background-color:${playList[play_list].color[0]}`);
}
$lis.forEach((v, i) => {
  v.addEventListener("click", () => {
    play_list = i;
    changeCd();
  });
});

$prev.addEventListener("click", () => {
  play_list = play_list - 1;
  if (play_list < 0) {
    play_list = $lis.length - 1;
  }
  changeCd();
});

$next.addEventListener("click", () => {
  play_list = play_list + 1;
  if (play_list >= $lis.length) {
    play_list = 0;
  }
  changeCd();
});

// 실행
$Buttons[0].addEventListener("click", () => {
  if (isChecked) {
    $disk.classList.add("active");
    $main.childNodes[1].setAttribute("class", "filter");
    $main.childNodes[1].setAttribute(
      "style",
      `background-image: url('${playList.filter((data) => data.status == "active")[0].src}')`
    );
  }
});
// 중단
$Buttons[1].addEventListener("click", () => {
  if (isChecked) {
    $disk.classList.remove("active");
    $main.childNodes[1].setAttribute("class", "filter-on");
  }
});
