import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/2.state/product';
import productList from '../../__mock__/products.json';

function State3() {
  const navigate = useNavigate();

  const onNavigateDetailPage = (number) => {
    navigate(`/state/detail/${number}`);
  };

  return (
    <>
      <h1>문제3</h1>
      <h2>상품 목록</h2>
      <ul>
        {/* list */}
        {/* 예시 데이터 */}
        {productList.products.map((product, i) => (
          <ProductCard key={i} product={product} onNavigate={onNavigateDetailPage} />
        ))}
      </ul>
    </>
  );
}
export default State3;
