/*
배열 나누기
함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
    ex) [1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]
*/

function division(array, division_length) {
  const before_array = array;
  const after_array = [];
  let reset_array = [];
  before_array.forEach((v, i, arr) => {
    reset_array.push(arr[i]);
    if (reset_array.length === division_length) {
      after_array.push(reset_array);
      reset_array = [];
    }
  });

  return after_array;
}

const judge_array = new Array(80).fill().map((v, i, arr) => (arr[i] = i + 1));
const adivision_number = 4;

console.log(division(judge_array, adivision_number));
