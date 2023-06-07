import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    todos: [],
    addTodoState: {
        loading: false,
        done: false,
        error: null,
    }
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    extraReducers: builder => {
        builder.addCase(getTodo.pending, (state)=> {
            state.addTodoState.loading = true
            state.addTodoState.done = false
            state.addTodoState.error = null
        })
        
        // addTodo fulfilled
        builder.addCase(getTodo.fulfilled, (state, action)=>{
            state.todos = (action.payload);
            state.addTodoState.loading = false
            state.addTodoState.done = true
            state.addTodoState.error = null
        })
        
        // addTodo rejected
        builder.addCase(getTodo.rejected, (state, action)=>{
            state.addTodoState.error = action.payload
            state.addTodoState.done = false
        })

        // addTodo loading
        builder.addCase(addTodo.pending, (state)=> {
            state.addTodoState.loading = true
            state.addTodoState.done = false
            state.addTodoState.error = null
        })
        
        // addTodo fulfilled
        builder.addCase(addTodo.fulfilled, (state, action)=>{
            state.todos.unshift(action.payload);
            state.addTodoState.loading = false
            state.addTodoState.done = true
            state.addTodoState.error = null
        })
        
        // addTodo rejected
        builder.addCase(addTodo.rejected, (state, action)=>{
            state.addTodoState.error = action.payload
            state.addTodoState.done = false
        })

        // updateTodo pending
        builder.addCase(updateTodo.pending, (state)=> {
            state.addTodoState.loading = true
            state.addTodoState.done = false
            state.addTodoState.error = null
        })
        
        // updateTodo fulfilled
        builder.addCase(updateTodo.fulfilled, (state, action)=>{
            let updateIndex = state.todos.findIndex((el) => el.id === parseInt(action.payload.id));
            const {content, id:prevId, state:nextState, title}=action.payload
                    if (updateIndex !== -1) {
                         state.todos[updateIndex] = {
                            title,
                            state: nextState,
                            content,
                            id : parseInt(prevId)
                         };
                    }
            state.addTodoState.loading = false
            state.addTodoState.done = true
            state.addTodoState.error = null
        })
        
        // updateTodo rejected
        builder.addCase(updateTodo.rejected, (state, action)=>{
            state.addTodoState.error = action.payload
            state.addTodoState.done = false
        })

        // deleteTodo pending
        builder.addCase(deleteTodo.pending, (state)=> {
            state.addTodoState.loading = true
            state.addTodoState.done = false
            state.addTodoState.error = null
        })
        
        // deleteTodo fulfilled
        builder.addCase(deleteTodo.fulfilled, (state, action)=>{
            const deleteIndex = state.todos.findIndex((el) => el.id === parseInt(action.payload.id));
            if (deleteIndex !== -1) {
                console.log(deleteIndex)
                   state.todos.splice(deleteIndex, 1);
            }
            state.addTodoState.loading = false
            state.addTodoState.done = true
            state.addTodoState.error = null
        })
        
        // deleteTodo rejected
        builder.addCase(deleteTodo.rejected, (state, action)=>{
            state.addTodoState.error = action.payload
            state.addTodoState.done = false
        })
    }
});

export const addTodo = createAsyncThunk('todo/addTodo', async({title, content}) => {
  const res = await axios.post('/api/todo', {title, content});
  return res.data
});

export const updateTodo = createAsyncThunk('todo/updateTodo', async({id,title, content, state}) => {
    const res = await axios.put(`/api/todo/${id}`,{title, content, state} );
    return res.data
})

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async({id}) => {
const res = await axios.delete(`/api/todo/${id}`);
return res.data
})

export const getTodo = createAsyncThunk('todo/getTodo', async ()=>{
    const res = await axios.get(`/api/todo`)
    return res.data
})