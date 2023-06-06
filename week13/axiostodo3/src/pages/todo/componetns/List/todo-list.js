import OneTodo from "./one-todo";
import { useMemo } from "react";

const TodoList = ({ todoList }) => {

    const MemoTodoList = useMemo(() => todoList, [todoList])
    return (
        <>
            {MemoTodoList.map((todo) => (
                <OneTodo key={todo.id} todo={todo} />
            ))}
        </>
    );
};
export default TodoList;
