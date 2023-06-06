import TODO_API from "apis/todoApi";
import { toast } from "react-toastify";

const showTodoToastMessage = (e, setTodoList) => {
    e.preventDefault()
    const title = e.target.title.value;
    const content = e.target.content.value;
    toast.promise(TODO_API.postTodo(title, content), {
        pending: 'TODO LOADING',
        success: "TODO SUCCESS",
        error: "TODO ERROR"
    }).then((data) => {
        setTodoList(data)
    }).catch((err) => {
        if (err.type === 'empty error') {
            alert(err.message)
        }
    })
};

export const toastOption = {
    autoClose: 2000,
    theme: 'colored'
}

export default showTodoToastMessage