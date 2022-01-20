import { useEffect } from 'react';

import { fetchTodosData } from '../../redux/reducers/todoReducer';
import { useAppDispatch } from '../../hooks';

import { Item } from '../Item';
import { useAppSelector } from '../../hooks';

import styles from './List.module.css';

const List = () => {
  const fetchStatus = useAppSelector((state) => state.todos.fetchStatus);

  const dispatch = useAppDispatch();
  
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


  useEffect(() => {
    if (fetchStatus === 'idle') {
      dispatch(fetchTodosData());
    }
  }, [fetchStatus, dispatch]);

  if (fetchStatus === 'loading') {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (fetchStatus === 'error') {
    return <div className={styles.error}>Loading error</div>;
  }

  return (
    <ul className={styles.list}>
      {currentTodos.map((todo) => {
        return (
          <li key={todo.id}>
            <Item todo={todo} />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
