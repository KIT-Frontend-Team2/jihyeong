import { useModalContext } from '../../../../../store/2_context';
import ContextQ1Detail2 from './Detail2';

const ContextQ1Detail = () => {
  const [_, setIsPushed] = useModalContext();
  const onClick = () => {
    setIsPushed((prev) => {
      let [new_1, new_2] = prev;
      return [!new_1, new_2];
    });
  };
  return (
    <>
      <h2>ContextQ1Detail</h2>
      <button onClick={onClick}>보이기</button>
      <ContextQ1Detail2 />
    </>
  );
};
export default ContextQ1Detail;
