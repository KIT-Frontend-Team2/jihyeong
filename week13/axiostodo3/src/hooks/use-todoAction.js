import TODO_API from "apis/todoApi";
const { TodoListAtom } = require("atoms/todo");
const { useSetRecoilState } = require("recoil");

const useTodoAction = () => {

    const setTodoList = useSetRecoilState(TodoListAtom);

    const todoEdit = (todo, editContent, isEditMode, setIsEditMode) => {
        if (!isEditMode) return setIsEditMode(true);
        const updatePost = {
            ...todo, content: editContent
        };
        const res = TODO_API.updateTodo(updatePost);
        res.then((data) => {
            setTodoList(data);
        });
        setIsEditMode(false);
    };

    const todoDelete = (id) => {
        if (window.confirm("정말 삭제하시겠습니까")) {
            const res = TODO_API.deleteTodo(id);
            res.then((data) => {
                setTodoList(data);
            });
        }
    };

    const todoCheck = (todo, id, state) => {
        const post = {
            ...todo, state: Number(!state)
        };
        setTodoList((prev) => {
            const updateList = [...prev];
            const selectNumber = updateList.findIndex((data) => data.id === id);
            if (selectNumber !== -1) {
                updateList[selectNumber] = post;
            }
            console.log(updateList);
            return updateList;
        });

        // 낙관적 업데이트
        const res = TODO_API.updateTodo(post);
        res.then((data) => {
            setTodoList(data);
        });
        // 이후 실제로 업데이트된 정보를 가져옵니다.
    };


    return { todoEdit, todoDelete, todoCheck };
}

export default useTodoAction;