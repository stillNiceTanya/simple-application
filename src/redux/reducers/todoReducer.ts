import { v4 as uuidv4 } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  activeTodos: Todo[];
  completedTodos: Todo[];
  currentTodos: Todo[];
}

const initialState: TodoState = {
  todos: [],
  activeTodos: [],
  completedTodos: [],
  currentTodos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
      state.activeTodos.push(newTodo);
      state.currentTodos = state.todos;
    },
    setCompleted(state, action: PayloadAction<string>) {
      const todo = state.todos.find((todo) => todo.id === action.payload);

      if (todo?.completed === false) {
        todo.completed = !todo.completed;
        state.activeTodos = state.activeTodos.filter(
          (item) => item.id !== todo.id
        );
        state.completedTodos.push(todo);
      } else {
        if (todo?.completed === true) {
          todo.completed = !todo.completed;
          state.completedTodos = state.completedTodos.filter(
            (item) => item.id !== todo.id
          );
          state.activeTodos.push(todo);
        }
      }
      const currentTodo = state.currentTodos.find(
        (todo) => todo.id === action.payload
      );
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
    showAll(state) {
      state.currentTodos = state.todos;
    },
    showActive(state) {
      state.currentTodos = state.activeTodos;
    },
    showCompleted(state) {
      state.currentTodos = state.completedTodos;
    },
    clearCompleted(state) {
      state.completedTodos.length = 0;

      state.todos = state.todos.filter((todo) => todo.completed === false);

      state.activeTodos = [...state.todos];
      state.currentTodos = state.todos;
    },
  },
});

export const {
  addTodo,
  setCompleted,
  showAll,
  showActive,
  showCompleted,
  clearCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
