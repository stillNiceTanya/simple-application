import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Input from '../components/Input/Input';
import store from '../redux/store';

test('Input renders without crashing and contains placeholder which has focus on entering todos', () => {
  render(
    <Provider store={store}>
      <Input />
    </Provider>
  );
  const inputField = screen.getByPlaceholderText('What needs to be done?');

  expect(inputField).toHaveFocus();
});
