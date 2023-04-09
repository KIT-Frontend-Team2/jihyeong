// 난이도 (하)

/*
   승빈이가 시험을 봤습니다. 각 국,수,사,과,영의 점수는 100, 70, 80, 90, 10입니다. 최고점과 최저점을 제외한 나머지 점수의 합을 구하세요.
*/
const exam = { 국: 100, 수: 70, 사: 80, 과: 90, 영: 10 };
let max = "국";
let min = "국";

for (const key in exam) {
  if (exam[max] < exam[key]) max = key;
}
for (const key in exam) {
  if (exam[min] > exam[key]) min = key;
}

let result_sum = 0;
for (const key in exam) {
  if (key !== max && key !== min) result += exam[key];
}

console.log(result_sum);
