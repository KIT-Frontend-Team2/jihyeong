import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../__mock__/products.json';
import styled from 'styled-components';
import CommentsData from './Comments';
function DetailPage() {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const inputRef = useRef();
  const loginState = {
    userName: '김성용강사',
  };
  const [rendering, isRendering] = useState(false);
  const render = () => {
    isRendering((prev) => !prev);
  };
  useEffect(() => {
    setProducts(data.products.filter((product) => product.productNumber === params.productNumber));
  }, [rendering]);

  const onSubmit = (e) => {
    e.preventDefault();
    setProducts((prev) => {
      let oldData = { ...prev };
      const newReview = {
        reviewer: loginState.userName,
        rating: 0,
        review: inputRef.current.value,
        isMe: true,
      };
      oldData[0].Review.push(newReview);
      return oldData;
    });
    isRendering((prev) => !prev);
  };
  return (
    <>
      {products.length > 0 && (
        <div>
          {products.map((productInfo) => {
            const {
              productName,
              productPrice,
              productNumber,
              productSize,
              productRating,
              productReview,
              Review: Reviews,
            } = productInfo;
            return (
              <>
                <S.Container>
                  <div>
                    <img
                      src={`https://source.unsplash.com/1600x900/?${productName}`}
                      alt={productName}
                      width={400}
                      height={400}
                    />
                  </div>
                  <S.Wrap>
                    <S.Table>
                      <tr>
                        <S.TableData>상품명</S.TableData>
                        <S.TableData>가격</S.TableData>
                        <S.TableData>번호</S.TableData>
                        <S.TableData>사이즈</S.TableData>
                        <S.TableData>좋아요</S.TableData>
                        <S.TableData>리뷰 갯수</S.TableData>
                      </tr>
                      <tr>
                        <S.TableData>{productName}</S.TableData>
                        <S.TableData>{Number(productPrice).toLocaleString('en')}</S.TableData>
                        <S.TableData>{productNumber}</S.TableData>
                        <S.TableData>{productSize}</S.TableData>
                        <S.TableData>{productRating}</S.TableData>
                        <S.TableData>{productReview}</S.TableData>
                      </tr>
                    </S.Table>
                  </S.Wrap>
                  <S.Comment>
                    {Reviews.map((dat, i) => {
                      return (
                        <CommentsData
                          data={dat}
                          index={i}
                          product={data}
                          setProducts={setProducts}
                          rendering={render}
                        />
                      );
                    })}
                    <S.CommentInner>
                      <S.TextBox>
                        <div>{loginState.userName}</div>
                        <S.TextBoxForm onSubmit={onSubmit}>
                          <InputLabel htmlFor="commentInput">
                            <InputData id="commentInput" ref={inputRef} />
                          </InputLabel>
                          <button style={{ width: '50px' }}>작성</button>
                        </S.TextBoxForm>
                      </S.TextBox>
                    </S.CommentInner>
                  </S.Comment>
                  <button
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    뒤로가기
                  </button>
                </S.Container>
              </>
            );
          })}
        </div>
      )}

      {products.length === 0 && (
        <div>
          없는 상품입니다.
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로가기
          </button>
        </div>
      )}
    </>
  );
}
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
export default DetailPage;
