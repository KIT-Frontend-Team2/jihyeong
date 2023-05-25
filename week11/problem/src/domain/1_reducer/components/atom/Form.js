import KEY from '../../../../consts/reducerKeys';

const Q1Form = ({ onSubmit, dispatch }) => {
  const AddedHandling = (e) => {
    e.preventDefault();
    dispatch({
      type: KEY.ADDED,
      name: e.target.name.value,
      price: e.target.price.value,
    });
  };
  return (
    <form onSubmit={AddedHandling}>
      <label>
        <input type="text" name="name" placeholder="재료" />
      </label>
      <label>
        <input type="number" name="price" placeholder="가격" />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default Q1Form;
