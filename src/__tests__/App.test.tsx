import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

import App from '../App';
import { renderWithProviders } from '../utils/test-utils';

test('should render App component without errors', () => {
  renderWithProviders(<App />);
  expect(screen.getByText('todos')).toBeInTheDocument();
});
