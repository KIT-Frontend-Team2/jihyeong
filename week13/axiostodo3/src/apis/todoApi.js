const { axiosInstance } = require("utils/axios");

const getTodo = async () => {
    try {
        const res = await axiosInstance.get('/todo');
        console.log(res.data.data)
        return res.data.data
    } catch (err) {
        console.error(err)
    }
}

const postTodo = async (title, content) => {
    try {
        if (!title || !content) {
            const err = new Error()
            err.type = 'empty error'
            err.message = '빈칸을 채워주세요'
            throw err
        }
        await axiosInstance.post('/todo', {
            title,
            content
        })

        const res = await axiosInstance.get('/todo');
        return res.data.data

    } catch (err) {
        throw err
    }
}

const deleteTodo = async (id) => {
    try {
        await axiosInstance.delete(`/todo/${id}`)
        const res = await axiosInstance.get('/todo');
        return res.data.data
    } catch (err) {
        throw err
    }
}

const updateTodo = async (updatePost) => {
    try {
        await axiosInstance.put(`/todo/${updatePost.id}`, {
            state: updatePost.state, title: updatePost.title, content: updatePost.content
        });

        const res = await axiosInstance.get('/todo');
        return res.data.data
    } catch (err) {
        console.error(err)
    }
}

const TODO_API = {
    getTodo, postTodo, deleteTodo, updateTodo
}

export default TODO_API