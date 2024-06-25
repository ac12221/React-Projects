import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[]
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers:{
        addTodo : (state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload,
                isEdit: false
            }
            state.todos.push(todo);
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map(todo => (todo.id === action.payload) ? {...todo, isEdit: true}  : todo);
        },
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.isEdit ? {...todo, text: action.payload, isEdit: false}  : todo);
        },
    }
})

export const {addTodo,editTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer