import { useState } from 'react';
import styled from 'styled-components';

const CommentsData = ({ data, index }) => {
  const [isFix, setIsFix] = useState(false);
  const { rating, review, reviewer, isMe } = data;
  const UpdateHandling = () => {
    setIsFix((prev) => !prev);
    console.log(index + '번째 댓글을 수정합니다!');
  };
  const DeleteHandling = () => {
    console.log(index + '번째 댓글 삭제!');
  };
  const UpdateSubmitHandling = () => {
    console.log(index + '번째 댓글을 수정을 완료합니다.!');
  };
  return (
    <S.CommentInner>
      <div>
        <img
          src={`https://source.unsplash.com/1600x900/?고양이`}
          alt={review}
          width={50}
          height={50}
        />
      </div>
      <S.CommentInput>
        <S.CommentData>
          <div>{reviewer}</div>
          {isMe && !isFix && (
            <div>
              <button onClick={UpdateHandling}>수정</button>
              <button onClick={DeleteHandling}>삭제</button>
            </div>
          )}
          {isFix && (
            <div>
              <button onClick={UpdateSubmitHandling}>확인</button>
              <button onClick={() => setIsFix((prev) => !prev)}>취소</button>
            </div>
          )}
        </S.CommentData>
        <S.CommentData>
          <div>{review}</div>
          <div>좋아요 : {rating}</div>
        </S.CommentData>
      </S.CommentInput>
    </S.CommentInner>
  );
};
const Container = styled.div`
  margin: 0 auto;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  width: 700px;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;
const Table = styled.table`
  border: 1px solid black;
  width: 100%;
`;
const TableData = styled.td`
  border: 1px solid black;
`;
const Comment = styled.div`
  display: flex;
  flex-direction: column;
`;
const CommentInner = styled.div`
  display: flex;
  padding: 5px;
  border: 1px solid gray;
  margin: 5px;
`;
const CommentData = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CommentInput = styled.div`
  width: 100%;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
const TextBoxForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const InputLabel = styled.label`
  width: 100%;
  display: flex;
  position: relative;
`;

const InputData = styled.input`
  width: 100%;
  position: relative;
  border: none;
  outline: none;
  left: 0;
`;
const S = {
  Container,
  Wrap,
  Table,
  TableData,
  Comment,
  CommentInner,
  CommentData,
  CommentInput,
  TextBox,
  TextBoxForm,
  InputData,
};

export default CommentsData;
