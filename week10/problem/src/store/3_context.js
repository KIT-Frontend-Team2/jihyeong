import { createContext, useContext, useReducer } from 'react';
const SUBMIT = 'SUBMIT';
const RESET = 'RESET';
const ListADD = 'LISTADD';
const ADDED = 'ADDED';
const Key = {
  SUBMIT,
  RESET,
  ADDED,
};

const reducer_context = (states, action) => {
  switch (action.type) {
    case Key.ADDED:
      const { name, nickname } = action;
      return [
        ...states,
        {
          id: Math.floor(Math.random() * 10000),
          name,
          nickname,
          isEdit: false,
        },
      ];
    case Key.ListADD:
      return;
    case Key.SUBMIT:
      states.map((state) => ({}));
      return;

    case Key.RESET:
      return [];

    default:
      return states;
  }
};

const InitialData = [{ id: 1, name: '홍길동', nickname: '히히' }];

const UserListContext = createContext();

export const useListProvider = () => useContext(UserListContext);

const ListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer_context, InitialData);

  return <UserListContext.Provider value={[state, dispatch]}>{children}</UserListContext.Provider>;
};

export default ListProvider;
