import React, { useRef, useState } from 'react';

export default function UseRef() {
    console.log('렌더링되었습니다 😥')
    const inputElem = useRef(null);
    const [number, setNumber] = useState(0)
    const [numberRef, setNumRef] = useState(0)
    const onButtonClick = () => {
      // `current`는 마운트된 input element를 가리킵니다.
      inputElem.current.focus();
    };

    return (
      <>
        <input ref={inputElem} type="text" />
        <button onClick={()=>{
            onButtonClick();
            setNumRef(inputElem.current.value)
        }}>Focus the input</button>
        <div>
        <input type='text' onChange={(e)=> setNumber(e.target.value)}/>
        </div>
        <div>
        <button onClick={()=>{console.clear()}}>콘솔 지우기</button>
        </div>

        <div>
          <div>useState: {number}</div>
          <div>useRef: {numberRef}</div>
        </div>
      </>
    );
}

