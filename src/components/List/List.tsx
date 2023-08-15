import React, { useEffect } from 'react';

import { fetchTodosData } from '../../redux/reducers/todoReducer';
import { useAppDispatch } from '../../hooks';

import './List.scss';
import Item from '../Item/Item';

import { useAppSelector } from '../../hooks';

const List: React.FC = () => {
  const fetchStatus = useAppSelector((state) => state.todos.fetchStatus);

  const currentTodos = useAppSelector((state) => {
    const { todos, currentFilter } = state.todos;
    switch (currentFilter) {
    case 'active':
      return todos.filter((todo) => !todo.completed);
    case 'completed':
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
    }
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (fetchStatus === 'idle') {
      dispatch(fetchTodosData());
    }
  }, [fetchStatus, dispatch]);

  if (fetchStatus === 'loading') {
    // TODO: Добавить компонент загрузки
    return <div>Loading...</div>
  }

  if (fetchStatus === 'error') {
    // TODO: Добавить компонент ошибки
    return <div>Error</div>
  }

  return (
    <ul className='todo-list'>
      <li>
        {currentTodos.map((todo) => {
          return (
            <Item
              key={todo.id}
              todo={todo}
            />
          );
        })}
      </li>
    </ul>
  );
};

export default List;
