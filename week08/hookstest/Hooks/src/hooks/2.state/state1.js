import { useState } from 'react';
import PlayListMock from '../../__mock__/playList.json';

function State1() {
  const [playList, setPlayList] = useState(PlayListMock.playlist);
  const [makeSong, SetMakeSong] = useState({
    title: '',
    signer: '',
  });
  return (
    <>
      <h1>문제1</h1>
      <ul>
        {playList.map((prev) => {
          return (
            <li>
              <h3>{prev.title}</h3>
              <p>{prev.signer}</p>
              <button
                onClick={() => {
                  setPlayList((list) =>
                    list.filter((deleteTarget) => deleteTarget.title !== prev.title)
                  );
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <p>
          곡명 :{' '}
          <input
            onChange={(e) => {
              SetMakeSong((prev) => ({ ...prev, title: e.target.value }));
            }}
          />
        </p>
        <p>
          가수/작곡 :{' '}
          <input
            onChange={(e) => {
              SetMakeSong((prev) => ({ ...prev, signer: e.target.value }));
            }}
          />
        </p>
        <p>
          <button
            onClick={() => {
              setPlayList((prev) => {
                if (
                  playList.filter(
                    (data) => data.signer === makeSong.signer && data.title === makeSong.title
                  ).length > 0
                ) {
                  alert('중복된 노래가 있습니다.');
                  return [...prev];
                }

                return [...prev, makeSong];
              });
            }}
          >
            추가
          </button>
        </p>
      </div>
    </>
  );
}
/**
 *
 * 기존 코드와 달라진 점
 * 1. 동일한 이름의 곡명과 가수일경우 추가가 되지 않게 바꾸었습니다.
 *
 */
export default State1;
