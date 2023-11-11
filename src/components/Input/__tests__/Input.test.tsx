import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

import Input from '../Input';
import { renderWithProviders } from '../../../utils/test-utils';

test('should render Input component without errors', () => {
  renderWithProviders(<Input />);

  const inputField = screen.getByPlaceholderText('What needs to be done?');

  expect(inputField).toHaveFocus();
});
