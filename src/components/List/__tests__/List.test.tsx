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
