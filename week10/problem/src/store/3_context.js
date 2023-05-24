import { createContext, useContext, useReducer } from 'react';
const SUBMIT = 'SUBMIT';
const RESET = 'RESET';
const ADDED = 'ADDED';
const CHANGE = 'CHANGE';
const Key = {
    SUBMIT,
    CHANGE,
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
        case Key.CHANGE:
            const newStates = states.map((state) => {
                return { ...state, isEdit: true };
            });
            return newStates;
        case Key.RESET:
            return [];
        case Key.SUBMIT:
            let trueData = [];
            trueData = states.filter((state) => state.isEdit === true);
            trueData.forEach((data) => {
                return console.log(data.nickname);
            });
            return states;
        default:
            return states;
    }
};

const InitialData = [{ id: 1, name: '홍길동', nickname: '히히' }];

const UserListContext = createContext();

export const useListProvider = () => useContext(UserListContext);

const ListProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer_context, InitialData);

    return <UserListContext.Provider value={[state, dispatch, Key]}>{children}</UserListContext.Provider>;
};

export default ListProvider;
