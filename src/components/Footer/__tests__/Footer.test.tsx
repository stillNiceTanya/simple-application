import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen } from '@testing-library/react';

import Footer from '../Footer';
import { renderWithProviders } from '../../../utils/test-utils';
import { FetchStatus, Filter } from '../../../redux/types';

const initialTodos = {
  todos: [
    { id: 5, title: 'Buy Milk', completed: false },
    { id: 6, title: 'Buy Bread', completed: true },
  ],
  currentFilter: 'all' as Filter,
  fetchStatus: 'idle' as FetchStatus,
};

test('should render Footer component without errors', () => {
  renderWithProviders(<Footer />, {
    preloadedState: {
      todos: initialTodos,
    },
  });

  expect(screen.getByText('1 item left')).toBeInTheDocument();
  expect(screen.getAllByRole('button')).toHaveLength(4);
});

test('should clear completed todos', () => {
  const { store } = renderWithProviders(<Footer />, {
    preloadedState: {
      todos: initialTodos,
    },
  });

  fireEvent.click(screen.getByText('Clear completed'));

  expect(store.getState().todos.todos).toHaveLength(1);
});
