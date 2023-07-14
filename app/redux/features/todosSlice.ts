import { createSlice } from "@reduxjs/toolkit";
import { UUID } from "crypto";

type Todo = {
  id: UUID;
  title: string;
};

type Todos = {
  todos: Todo[];
};

const initialState = {
  todos: [],
} as Todos;

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    reset: () => initialState,
    getTodos: (state) => {
      state.todos;
    },
  },
});
export const { getTodos } = todos.actions;
export default todos.reducer;
