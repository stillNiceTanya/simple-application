import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTodos } from '../../api';
import type { FetchStatus, Filter, Todo } from '../types';

type TodosState = {
  todos: Todo[];
  currentFilter: Filter;
  fetchStatus: FetchStatus;
};

type UpdateTodoPayload = {
  id: Todo['id'];
  title: Todo['title'];
};

export const initialState: TodosState = {
  todos: [],
  currentFilter: 'all',
  fetchStatus: 'idle',
};

const fetchTodosData = createAsyncThunk('todos/fetchTodosData', async () => {
  return await fetchTodos({ offset: 0, limit: 5 });
});

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const newTodo = {
        id: uuidv4(),
        title: action.payload,
        completed: false,
      };

      state.todos.push(newTodo);
    },

    deleteTodo(state, action: PayloadAction<Todo['id']>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    toggleCompleted(state, action: PayloadAction<Todo['id']>) {
      const todo = state.todos.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    setFilter(state, action: PayloadAction<Filter>) {
      state.currentFilter = action.payload;
    },

    clearCompleted(state) {
      state.todos = state.todos.filter((todo) => !todo.completed);

      if (state.currentFilter === 'completed') {
        state.currentFilter = 'all';
      }
    },

    updateTodo(state, action: PayloadAction<UpdateTodoPayload>) {
      const { id, title } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);

      if (todo) {
        todo.title = title;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodosData.pending, (state) => {
        state.fetchStatus = 'loading';
      })
      .addCase(fetchTodosData.fulfilled, (state, action) => {
        state.fetchStatus = 'success';
        state.todos = state.todos.concat(action.payload);
      })
      .addCase(fetchTodosData.rejected, (state) => {
        state.fetchStatus = 'error';
      });
  },
});

export const {
  addTodo,
  deleteTodo,
  setFilter,
  toggleCompleted,
  clearCompleted,
  updateTodo,
} = todoSlice.actions;

export { fetchTodosData };

export default todoSlice.reducer;
