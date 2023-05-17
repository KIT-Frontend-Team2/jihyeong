import { useRef, useState } from 'react';

function Q2() {
  const [forceRender, setForceRender] = useState(false);
  const [input, setInput] = useState('');
  const [hide, setHide] = useState(true);
  const prevCount = useRef('');
  const isSubmit = useRef(false);
  const changRef = useRef();
  // 추가가 됐는지 확인해주는 용도
  const arr = [];
  const SubmitList = useRef();
  // 제출된 리스트
  const List = useRef(arr);
  // 제출이 안된 리스트 (기존의 arr[]을 기본값으로 받아줍니다.)
  const randomColor = () => {
    return Math.floor(Math.random() * 255);
  };
  // const [hide,setHide] = useState(true) 제출버튼 눌렀을 때, 안눌렀을 때 useRef에서 제출된 리스트를 보여줄지 제출이 안된 리스트를 보여줄지

  const onAddList = () => {
    if (input.trim() === '') return;
    // 빈칸을 제거한 값이 아무것도 없을시 유효성 검사를 통해 아래 함수가 실행되지 않게 해줍니다.
    if (isSubmit.current === false) {
      // 기존에 누른적이 있다면 중복으로 누를수 없게 해줍니다.
      setForceRender((prev) => !prev);
      List.current.push(input);
      isSubmit.current = true;
      // 기존에 누른것을 확인할 수 있게 true로 바꿔줍니다.
    }
  };

  const ChgInput = (e) => {
    setInput(e.target.value);
  };

  const submitBtn = () => {
    // useRef로 데이터를 이동시키기 때문에 데이터를 전송시켜주기 위해서 렌더링을 실시합니다.
    console.log(prevCount.current);
    setForceRender((prev) => !prev);
    prevCount.current = List.current.length;
    SubmitList.current = [...List.current];
    // 기존에 가지고있던 데이터들을 전개연산자를 통해 제출한 리스트에 옮겨줍니다.
    isSubmit.current = false;
  };
  return (
    <>
      <h1>문제2</h1>
      <div>
        <h2>문제 2-1</h2>
        <p>
          <input
            onChange={(e) => {
              ChgInput(e);
            }}
          />
        </p>
        <p>
          <button onClick={onAddList}>추가</button>
        </p>
        <p>
          <button onClick={submitBtn} disabled={prevCount.current === List.current.length}>
            {/* 추가 버튼이 눌렀을 경우 (이전 배열과 크기가 달라졌을 경우에만 추가가 됩니다.) */}
            제출
          </button>
          {/*
            {hide ? (CopyArr.current===undefined ? null:CopyArr.current.map((v)=> {return <div>{v}</div>})):
            List.current.length ===0 ? <div>제출할 목록이 없습니다</div>:
            List.current.map((v)=>{return <div>{v}</div>})}
          */}
          {/* 제출 버튼을 처음 눌렀을 때 추가된 리스트가 있음에도 추가되지 않음을 해결하였습니다. */}
        </p>
        {SubmitList.current === undefined || SubmitList.current.length === 0 ? (
          // 제출되어져있는 값이 없거나 또는 제출은 되었지만 빈 배열일경우 제출할 목록이 없다고 나오게 해줍니다.
          <div>제출할 목록이 없습니다</div>
        ) : (
          SubmitList.current.map((v) => {
            return <div>{v}</div>;
          })
        )}
      </div>
      <div>
        <h2>문제 2-2</h2>
        <p ref={changRef}> 이 문구는 아래 버튼을 누르면 색상이 바뀝니다</p>
        <button
          onClick={() => {
            changRef.current.style.color = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
          }}
        >
          변경
        </button>
      </div>
    </>
  );
}

/**
 *
 * 기존 코드와 달라진 점
 * 1. 제출이 안됐을경우 버튼이 눌러지는 에러를 조치하였습니다.
 * 2. 추가 버튼을 눌렀을 경우에만 제출이 활성화가 되게 조치하였습니다.
 *
 */
export default Q2;
