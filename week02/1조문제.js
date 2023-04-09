let user = ["이웅모", "신짱구", "김성용", "김지웅", "김철수", "배수지", "신짱아", "이육사"];
const team = { "1팀": [], "2팀": [], "3팀": [] };
const team_number = Object.keys(team);

/**
 * @param {검사할 이름} stringName
 * @param {찾을 배열} arr
 * @returns {true, false}
 */
function checkName(stringName, arr) {
  let checkNameList = "";
  arr_length = arr.length;
  if (arr_length == 0) return checkNameList.includes(stringName[0]);
  for (let i = 0; i < arr_length; i++) {
    checkNameList += arr[i][0];
  }
  return checkNameList.includes(stringName[0]);
}
let count = 0;
while (true) {
  if (team[team_number[count]].length === 3) count += 1;
  if (count === 3) count = 0;
  checkName(user[0], team[team_number[count]])
    ? (count += 1)
    : team[team_number[count]].push(user.shift());
  if (user.length === 0) break;
}

console.log(team);
