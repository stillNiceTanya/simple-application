import React from 'react';

import './List.scss';
import Item from '../Item/Item';

import { useAppSelector } from '../../hooks';

const List: React.FC = () => {
  const currentTodos = useAppSelector((state) => {
    const { todos, currentFilter } = state.todos;
    switch (currentFilter) {
      case 'active':
        return todos.filter((todo) => !todo.isCompleted);
      case 'completed':
        return todos.filter((todo) => todo.isCompleted);
      default:
        return todos;
    }
  });

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
