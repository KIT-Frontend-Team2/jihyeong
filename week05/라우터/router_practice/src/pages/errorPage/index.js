const ErrorPage = (error) => {
  return (
    <>
      <h1>이 페이지 주소는 잘못된 페이지 입니다.</h1>
      <h4>주소가 잘못 전달되었습니다.</h4>
      <span>오류 내용 : {error}</span>
    </>
  );
};

export default ErrorPage;
