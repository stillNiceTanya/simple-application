import React, { useCallback } from 'react';


import './Item.scss';
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';

import { useAppDispatch } from '../../hooks';
import { toggleCompleted } from '../../redux/reducers/todoReducer';
import type { Todo } from '../../types';

interface ItemProps {
  todo: Todo;
}

const Item: React.FC<ItemProps> = ({ todo }) => {
  const { id, title, completed } = todo;
  const dispatch = useAppDispatch();

  const IconComponent = completed ? FaRegCheckCircle : FaRegCircle;

  const handleClick = useCallback(() => {
    dispatch(toggleCompleted(id));
  }, [dispatch, id]);

  return (
    <div className='todo-item'>
      <div className='todo-icon__container'>
        <IconComponent
          className='todo-item__icon'
          onClick={handleClick}
        />
      </div>
      <span
        className={
          completed ? 'todo-item__text completed' : 'todo-item__text'
        }
      >
        {title}
      </span>
    </div>
  );
};

export default Item;
