import { useCallback } from 'react';

import type { Filter } from '../../redux/types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFilter, clearCompleted } from '../../redux/reducers/todoReducer';

import './Footer.scss';


const Footer = () => {
  const dispatch = useAppDispatch();

  const todosCount = useAppSelector((state) => {
    return state.todos.todos.length;
  });

  const activeTodosCount = useAppSelector((state) => {
    return state.todos.todos.filter((todo) => !todo.completed).length;
  });

  const handleChangeFilter = useCallback(
    (filter: Filter) => () => {
      dispatch(setFilter(filter));
    },
    [dispatch]
  );

  const handleClearCompleted = useCallback(() => {
    dispatch(clearCompleted());
  }, [dispatch]);

  if (!todosCount) return null;

  return (
    <div className='todo-footer'>
      <span className='todo-footer__count'>
        {`${activeTodosCount} ${activeTodosCount === 1 ? 'item' : 'items'}`}{' '}
        left
      </span>
      <div className='todo-footer__buttons'>
        <button onClick={handleChangeFilter('all')}>All</button>
        <button onClick={handleChangeFilter('active')}>Active</button>
        <button onClick={handleChangeFilter('completed')}>Completed</button>
      </div>
      <button onClick={handleClearCompleted}>Clear completed</button>
    </div>
  );
};

export default Footer;
