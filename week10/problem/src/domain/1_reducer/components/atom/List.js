import KEY from '../../../../consts/reducerKeys';

const ReducerQ1List = ({ dispatch, ingredients }) => {
  const DeleteHandling = (deleteId) => {
    dispatch({
      type: KEY.DELETE,
      id: deleteId,
    });
  };
  return (
    <tbody>
      {ingredients.map((ingredient) => (
        <tr>
          <td>{ingredient.name}</td>
          <td>{ingredient.price}</td>
          <td>
            <button
              onClick={() => {
                DeleteHandling(ingredient.id);
              }}
            >
              삭제
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ReducerQ1List;
