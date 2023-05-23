import { useModalContext } from '../../../../../store/2_context';

const ContextQ1Detail2 = () => {
  const [_, setIsPushed] = useModalContext();
  const onClick = () => {
    setIsPushed((prev) => {
      let [new_1, new_2] = prev;
      return [new_1, !new_2];
    });
  };
  return (
    <>
      <h2>ContextQ1Detail2</h2>
      <button onClick={onClick}>보이기</button>
    </>
  );
};
export default ContextQ1Detail2;
