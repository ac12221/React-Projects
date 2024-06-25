import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
       
    ]
}

export const TodoSlice = createSlice({
    name : "todo",
    initialState,
    reducers:{
        addTodo:(state,action )=>{
            const todo = {
                id: nanoid(),
                text : action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!== action.payload)
        },
        setTodos: (state,action)=>{
            state.todos = action.payload;
        },
        
    }
})

export const {addTodo,removeTodo,setTodos} = TodoSlice.actions

export default TodoSlice.reducer