import OneTodo from "./one-todo";

const TodoList = ({ todoList }) => {


    return (
        <>
            {todoList.map((todo) => (
                <OneTodo todo={todo} />
            ))}
        </>
    );
};
export default TodoList;
