const for_number = 60;
const user_name = { 코난: 0, 김전일: 0, 뽀로로: 0, 크롱: 0, 루피: 0, 타요: 0 };

function codingTest(number, name_list) {
  let name_list_arr = Object.keys(name_list);
  // 객체의 키값들을 배열로 받아와 줍니다.

  let index = 0;
  // 객체에 접근하기 쉽게 접근할 인덱스 번호 변수를 만들어줍니다.

  for (let count = 0; count < number; count++) {
    let random = Math.random() * 6;
    // 0.0000000000... ~ 0.9999999999... 중 숫자 하나가 랜덤으로 생성됩니다. 해당 숫자를 6을 곱해줍니다.
    // 그럼 최대 5.999999999... 중 하나가 생성이 됩니다.

    let random_number = Math.floor(random);
    // 내림을 해줌으로서 소수점 자리들을 전부 버려줍니다.

    name_list[Object.keys(name_list)[random_number]]++;
    // 해당 순번의 namelist에 증감연산자를 통해 숫자를 늘려줍니다

    if (name_list[Object.keys(name_list)[random_number]] == 5) {
      index = random_number;
      break;
      // 증감을 한 value 값이 만약 5라면 멈추게 됩니다.
      // 그리고 해당 key값에 접근하기 쉽게 index에 접근했던 random_number를 index에 할당해줍니다.
    }
  }
  return [`가장 많은 코딩 테스트 문제를 풀이한 사람은 ${name_list_arr[index]}입니다.`, name_list];
  // 배열 형태로 문자열과 객체를 넘겨줍니다. 이전에 만들어두었던 키값들의 배열에 인덱스 번호를 이용해 접근을 합니다.
  // 이후 객체를 그대로 반환합니다.
}
console.log(codingTest(for_number, user_name));
