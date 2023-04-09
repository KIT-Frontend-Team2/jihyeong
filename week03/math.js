/*
과제
로또 번호 뽑기

1 ~ 45까지 랜덤함 숫자 7자리의 배열
[1, 6, 8, 41, 45, 7]

매번 실행마다 다른 로또번호가 나와야합니다.
*/

function makeNumber(number) {
  return Math.floor(Math.random() * number + 1);
}

const lotto = [
  makeNumber(45),
  makeNumber(45),
  makeNumber(45),
  makeNumber(45),
  makeNumber(45),
  makeNumber(45),
];

console.log(lotto);
