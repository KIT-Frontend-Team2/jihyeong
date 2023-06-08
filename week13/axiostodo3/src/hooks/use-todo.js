import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { TodoListAtom } from "atoms/todo";
import TODO_API from "apis/todoApi";
const useTodoList = () => {
    const [todoList, setTodoList] = useRecoilState(TodoListAtom);

    useEffect(() => {
        const fetchTodoList = async () => {
            const data = await TODO_API.getTodo();
            setTodoList(data);
        };

        fetchTodoList();
    }, []);

    return todoList;
};

export default useTodoList