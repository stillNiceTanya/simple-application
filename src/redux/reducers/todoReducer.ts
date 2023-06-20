import { v4 as uuidv4 } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export type Filter = 'all' | 'active' | 'completed';

interface TodoState {
  todos: Todo[];
  currentFilter: Filter;
}

interface SetCompletedPayload {
  id: string;
  isCompleted: boolean;
}

const initialState: TodoState = {
  todos: [],
  currentFilter: 'all',
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        isCompleted: false,
      };

      state.todos.push(newTodo);
    },

    setIsCompleted(state, action: PayloadAction<SetCompletedPayload>) {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.isCompleted = action.payload.isCompleted;
      }
    },

    setFilter(state, action: PayloadAction<Filter>) {
      state.currentFilter = action.payload;
    },

    clearCompleted(state) {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);

      if (state.currentFilter === 'completed') {
        state.currentFilter = 'all';
      }
    },
  },
});

export const { addTodo, setFilter, setIsCompleted, clearCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
