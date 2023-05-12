import { useRef, useState } from 'react';
import styled from 'styled-components';

function Comment(props) {
  const { nickname, content, myComment, setting, index } = props;
  const [isFix, setIsFix] = useState(false);
  const newRef = useRef();
  return (
    <S.CommentItem>
      <p>
        작성자: <span>{nickname}</span>
      </p>
      {!isFix ? (
        <p>
          댓글 내용: <span>{content}</span>
        </p>
      ) : (
        <input ref={newRef} placeholder={content} />
      )}
      {myComment && (
        <>
          {
            <>
              {!isFix && (
                <>
                  <button
                    onClick={() => {
                      setIsFix(true);
                    }}
                  >
                    수정
                  </button>
                  <button
                    onClick={() => {
                      setting((prev) => ({
                        ...prev,
                        Comments: [...prev.Comments.filter((_, i) => i !== index)],
                      }));
                    }}
                  >
                    삭제
                  </button>
                </>
              )}
              {isFix && (
                <>
                  <button
                    onClick={() => {
                      setting((prev) => {
                        const newList = { ...prev };
                        return {
                          ...newList,
                          Comments: newList.Comments.map((data, i) => {
                            if (i === index) {
                              return { ...data, content: newRef.current.value };
                            }
                            return data;
                          }),
                        };
                      });
                      setIsFix(false);
                    }}
                  >
                    확인
                  </button>
                  <button
                    onClick={() => {
                      setIsFix(false);
                    }}
                  >
                    취소
                  </button>
                </>
              )}
            </>
          }
        </>
      )}
    </S.CommentItem>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};
