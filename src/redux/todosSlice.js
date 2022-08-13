import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
  },
})

export const { addTodo, deleteTodo } = todosSlice.actions

export default todosSlice.reducer