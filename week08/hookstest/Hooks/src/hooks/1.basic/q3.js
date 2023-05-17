import { useEffect, useState } from 'react';
import Q3components from '../../components/1.basic/q3components';

function Q3() {
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);
  let id;
  // setInterval의 반환된 타이머 식별자를 이용해 작업을 중지시킵니다.
  // clearInterval을 통해 타이머 식별자를 중지 시킬수 있습니다.
  // 하지만 useEffect를 이용해 isRunning 이라는 state가 변경이 될 때마다
  // 새로운 타이머 식별자 값을 id에 할당을 합니다. 초기 타이머 식별자를 기억하고 있는
  // 이렇게 된다면 clearInterval이 정상적으로 작동이 되지 않습니다.
  // 해당 이유로 let 키워드를 통해 타이머 식별자의 정보를 저장할 수 있는 id를
  // useEffect 밖에다가 빼줍니다.

  useEffect(() => {
    if (isRunning) {
      id = setInterval(() => setCount((prevCount) => prevCount + 1), 1000);
    }
    return () => {
      setCount(0);
      clearInterval(id);
    };
  }, [isRunning]);

  return (
    <>
      <h1>문제3</h1>
      <div>
        {isRunning ? (
          <>
            <p> 줄넘기 횟수 : {count} </p> <Q3components />
          </>
        ) : null}
        <p>
          <button onClick={() => setIsRunning(true)}>줄넘기 시작</button>
        </p>
        <p>
          <button
            onClick={() => {
              setIsRunning(false);
            }}
          >
            줄넘기 중지
          </button>
        </p>
      </div>
    </>
  );
}
/**
 *
 * 기존 코드와 달라진 점
 * 1. 풀이한 두사람 모두 해당 컴포넌트가 볼 수 있는 상태가 아니더라도 계속해서 렌더링이 일어나고 있었습니다.
 * 2. setInterval과 setTimeout에 대해 다시 한 번 정리하고, 두사람 모두 같이 다시 풀이하였습니다.
 *
 */
export default Q3;
