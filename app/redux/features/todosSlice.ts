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
    setCurrentTodo: (state, action: PayloadAction<Todo>) => {
      state.currentTodo = action.payload;
    },
    resetCurrentTodo: (state) => {
      state.currentTodo = null;
    },
  },
});

export const { addTodo, setCurrentTodo, resetCurrentTodo, resetTodos } =
  todosSlice.actions;

export default todosSlice.reducer;
