import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTodos } from '../../api';
import { Todo } from '../../types';

export type Filter = 'all' | 'active' | 'completed';

interface TodoState {
  todos: Todo[];
  currentFilter: Filter;
}

interface SetCompletedPayload {
  id: number | string;
  completed: boolean;
}

const initialState: TodoState = {
  todos: [],
  currentFilter: 'all',
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

    setIsCompleted(state, action: PayloadAction<SetCompletedPayload>) {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.completed = action.payload.completed;
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodosData.fulfilled, (state, action) => {
      if (!action.payload) return;

      state.todos = action.payload;
    });
  },
});

export const { addTodo, setFilter, setIsCompleted, clearCompleted } =
  todoSlice.actions;

export { fetchTodosData };

export default todoSlice.reducer;
