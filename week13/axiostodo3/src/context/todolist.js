import { createContext, useContext, useState } from "react";

export const TodoListContext = createContext();

export const useTodoList = () => useContext(TodoListContext);

export function TodoListProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  return (
    <TodoListContext.Provider value={[todoList, setTodoList]}>
      {children}
    </TodoListContext.Provider>
  )
}