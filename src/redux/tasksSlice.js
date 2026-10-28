import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      prepareTask(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        };
      },
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    deleteTask(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleTask(state, action) {
        return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return {
          ...task,
          completed: !task.completed,
        };
      });
    },
    toggleAll(state) {
        return state.map(task => ({...task, completed: true}))
    },
    deleteAllCompleted(state) {
        return state.filter(task => !task.completed)
    },
  },
});
console.log(tasksSlice)

export const {addTask, deleteTask, toggleTask, toggleAll, deleteAllCompleted} = tasksSlice.actions

export const tasksReducer = tasksSlice.reducer