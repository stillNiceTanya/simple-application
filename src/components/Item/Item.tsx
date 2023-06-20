import React, { useCallback } from 'react';

import type { Todo } from '../../redux/reducers/todoReducer';

import './Item.scss';
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';

import { useAppDispatch } from '../../hooks';
import { setIsCompleted } from '../../redux/reducers/todoReducer';

interface ItemProps {
  todo: Todo;
}

const Item: React.FC<ItemProps> = ({ todo }) => {
  const { id, text, isCompleted } = todo;
  const dispatch = useAppDispatch();

  const IconComponent = isCompleted ? FaRegCheckCircle : FaRegCircle;

  const handleClick = useCallback(() => {
    dispatch(setIsCompleted({ id, isCompleted: !isCompleted }));
  }, [dispatch, id, isCompleted]);

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
          isCompleted ? 'todo-item__text completed' : 'todo-item__text'
        }
      >
        {text}
      </span>
    </div>
  );
};

export default Item;
