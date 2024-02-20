import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    currentId: 0,
    todoItems: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoItems.push({
        id: ++state.currentId,
        text: action.payload,
        state: "todo",
      });
    },
    updateTodo: (state, action) => {
      const item = state.todoItems.findIndex(
        (item) => item.id === action.payload
      );
      state.todoItems[item].state =
        state.todoItems[item].state === "todo" ? "done" : "todo";

      state.todoItems.push(state.todoItems.splice(item, 1)[0]);
    },
    deleteTodo: (state, action) => {
      const item = state.todoItems.findIndex(
        (item) => item.id === action.payload
      );
      if (item !== -1) {
        state.todoItems.splice(item, 1);
      }
    },
  },
});

export default todoSlice;
