import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UUID } from "crypto";

export type Todo = {
  id: string;
  title: string;
};

type TodosState = {
  todos: Todo[];
  currentTodo: Todo | null;
};

const initialState: TodosState = {
  todos: [],
  currentTodo: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    resetTodos: () => initialState,
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo, resetTodos } = todosSlice.actions;

export default todosSlice.reducer;
