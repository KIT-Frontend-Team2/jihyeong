import KEY from '../consts/reducerKeys';

const _reducer = (states, action) => {
  switch (action.type) {
    case KEY.ADDED:
      const { name, price } = action;
      return [
        ...states,
        {
          id: Math.floor(Math.random() * 10000),
          name,
          price,
        },
      ];
    case KEY.DELETE:
      const { id } = action;
      return states.filter((state) => state.id !== id);
    default:
      return states;
  }
};

export default _reducer;
