import './App.scss';
import React from 'react';
import Footer from './components/Footer/Footer';
import Input from './components/Input/Input';
import List from './components/List/List';

import { useAppSelector, useAppDispatch } from './hook';
import {
  showActive,
  showCompleted,
  clearCompleted,
  showAll,
} from './redux/reducers/todoReducer';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { todos, currentTodos } = useAppSelector((state) => state.todos);

  const activeItems = todos.filter((todo) => todo.completed === false);

  return (
    <>
      <header className='header__title'>todos</header>
      <div className='content-wrapper'>
        <Input />
        <List todos={currentTodos} />
        {todos.length !== 0 && (
          <Footer
            itemsCount={activeItems.length}
            showAll={() => {
              dispatch(showAll());
            }}
            showActive={() => {
              dispatch(showActive());
            }}
            showCompleted={() => {
              dispatch(showCompleted());
            }}
            clearCompleted={() => {
              dispatch(clearCompleted());
            }}
          />
        )}
      </div>
    </>
  );
};

export default App;
