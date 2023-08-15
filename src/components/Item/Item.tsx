import { useCallback } from 'react';
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';

import { useAppDispatch } from '../../hooks';
import { toggleCompleted } from '../../redux/reducers/todoReducer';
import type { Todo } from '../../redux/types';

import './Item.scss';


type ItemProps = {
  todo: Todo;
}

const Item = ({ todo }: ItemProps) => {
  const { id, title, completed } = todo;
  const dispatch = useAppDispatch();

  const IconComponent = completed ? FaRegCheckCircle : FaRegCircle;

  const handleClick = useCallback(() => {
    dispatch(toggleCompleted(id));
  }, [dispatch, id]);

  return (
    <div className='todo-item' onClick={handleClick}>
      <div className='todo-icon__container'>
        <IconComponent
          className='todo-item__icon'
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
