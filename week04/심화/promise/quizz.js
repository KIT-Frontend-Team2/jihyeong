/* 
문제1.

1. 요구사항
    핸드폰 앱에 접속했을 때 슬라이드 패널은 미니멈 사이즈에서 사용자가 인식할 수 있도록 정확히 0.7초 후 맥시멈 사이즈로 바뀐다.
    또한, 맥시멈 사이즈로 변했을 때만 "이번 주 목표 달성까지 oo% 남았습니다"라는 텍스트가 눈에 보여야 한다.
    화면 검증에 들어가기전에 비동기 처리가 잘 이루어지는지 검증하기 위해 console.log를 활용하여 문제를 완성하여라


2. 결과
    [콘솔창]

    min size
    ... 0.7초 후
    max size
    이번주 목표까지 15% 남았습니다


3. 조건
    기초. promise를 사용하여 구현할 것
    심화. promise의 then catch가 아닌 async await을 사용할 것
*/
// console.log("min size");

const callback = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num >= 10) {
        return resolve(`이번 주 목표 달성까지 ${num}% 남았습니다`);
      } else {
        return reject("err");
      }
    }, 700);
  });
};

const data = async () => {
  try {
    console.log("min size");
    const result = await callback(5);
    console.log(result);
    console.log("max size");
  } catch (e) {
    console.log(e);
  }
};

data();
