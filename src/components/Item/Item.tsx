import { useCallback } from 'react';
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';

import { useAppDispatch } from '../../hooks';
import { toggleCompleted } from '../../redux/reducers/todoReducer';
import type { Todo } from '../../redux/types';

import styles from './Item.module.css';


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
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.iconContainer}>
        <IconComponent
          className={styles.icon}
        />
      </div>
      <span
        className={`${styles.item} ${completed ? styles.completed : ''}`
        }
      >
        {title}
      </span>
    </div>
  );
};

export default Item;
