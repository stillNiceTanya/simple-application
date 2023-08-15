import { useCallback, useState } from 'react';
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';

import type { Todo } from '../../redux/types';

import { useAppDispatch } from '../../hooks';
import {
  deleteTodo,
  toggleCompleted,
  updateTodo,
} from '../../redux/reducers/todoReducer';

import { EditButtons } from './components/EditButtons';
import { EditInput } from './components/EditInput';

import styles from './Item.module.css';

type ItemProps = {
  todo: Todo;
};

const Item = ({ todo }: ItemProps) => {
  const { id, title, completed } = todo;
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const checkIcon = completed ? (
    <FaRegCheckCircle className={`${styles.icon} ${styles.checked}`} />
  ) : (
    <FaRegCircle className={styles.icon} />
  );

  const handleClick = useCallback(() => {
    if (isEditing) return;

    dispatch(toggleCompleted(id));
  }, [isEditing, dispatch, id]);

  const handleDelete = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();

      if (window.confirm('Are you sure you want to delete this item?')) {
        dispatch(deleteTodo(id));
      }
    },
    [dispatch, id]
  );

  const handleEdit = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setIsEditing(true);
  }, []);

  const handleUpdate = useCallback(
    (newTitle: string) => {
      if (newTitle !== '' && newTitle !== title) {
        dispatch(updateTodo({ id, title: newTitle }));
      }

      setIsEditing(false);
    },
    [dispatch, id, title]
  );

  return (
    <div
      className={styles.container}
      onClick={handleClick}
    >
      <div className={styles.iconContainer}>{checkIcon}</div>
      {isEditing ? (
        <EditInput
          onUpdate={handleUpdate}
          defaultValue={title}
        />
      ) : (
        <span className={`${styles.item} ${completed ? styles.completed : ''}`}>
          {title}
        </span>
      )}
      {/* TODO: Сделать кнопки редактирования и удаления видимыми только при наведении */}
      <EditButtons
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default Item;
