import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

import List from '../List';
import { renderWithProviders } from '../../../utils/test-utils';
import { FetchStatus, Filter } from '../../../redux/types';

const initialTodos = {
  todos: [],
  currentFilter: 'all' as Filter,
  fetchStatus: 'idle' as FetchStatus,
};

test('should render List component while loading data', () => {
  renderWithProviders(<List />, {
    preloadedState: {
      todos: { ...initialTodos, fetchStatus: 'loading' },
    },
  });

  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

test('should render List component when error occurs', () => {
  renderWithProviders(<List />, {
    preloadedState: {
      todos: { ...initialTodos, fetchStatus: 'error' },
    },
  });

  expect(screen.getByText('Loading error')).toBeInTheDocument();
});

test('should render List component with todos', () => {
    renderWithProviders(<List />, {
      preloadedState: {
        todos: { ...initialTodos, fetchStatus: 'success' },
      },
    });
  
  });

  test('should render List component with no todos', () => {
    renderWithProviders(<List />, {
      preloadedState: {
        todos: { ...initialTodos, fetchStatus: 'success' },
      },
    });
  
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.queryByText('Loading error')).not.toBeInTheDocument();
  });
  
  test('should render only completed todos when filter is set to "completed"', () => {
  
    renderWithProviders(<List />, {
      preloadedState: {
        todos: { ...initialTodos, fetchStatus: 'success', currentFilter: 'completed' },
      },
    });
  
    expect(screen.queryByText('Todo 1')).not.toBeInTheDocument();
  });
  

  test('should render only active todos when filter is set to "active"', () => {
  
    renderWithProviders(<List />, {
      preloadedState: {
        todos: { ...initialTodos, fetchStatus: 'success', currentFilter: 'active' },
      },
    });
  
    expect(screen.queryByText('Todo 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Todo 2')).not.toBeInTheDocument();
  });

  
  