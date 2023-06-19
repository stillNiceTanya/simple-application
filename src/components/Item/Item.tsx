import React from 'react';
import './Item.scss';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FaRegCircle } from 'react-icons/fa';
import { useAppDispatch } from '../../hook';
import { setCompleted } from '../../redux/reducers/todoReducer';

interface ItemProps {
  id: string;
  text: string;
  completed: boolean;
}

const Item: React.FC<ItemProps> = ({ text, completed, id }) => {
  const dispatch = useAppDispatch();

  const IconComponent = completed ? FaRegCheckCircle : FaRegCircle;

  return (
    <>
      <div className='todo-item'>
        <div className='todo-icon__container'>
          <IconComponent
            className='todo-item__icon'
            onClick={() => {
              dispatch(setCompleted(id));
            }}
          />
        </div>
        <span
          className={
            completed ? 'todo-item__text completed' : 'todo-item__text'
          }
        >
          {text}
        </span>
      </div>
    </>
  );
};

export default Item;
