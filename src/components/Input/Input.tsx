import React, { useCallback } from 'react';
import { useAppDispatch } from '../../hooks';
import { useState } from 'react';
import { addTodo } from '../../redux/reducers/todoReducer';

import './Input.scss';

const Input = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>('');

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    []
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && value !== '') {
        dispatch(addTodo(value));
        setValue('');
      }
    },
    [dispatch, value]
  );

  return (
    <input
      type='text'
      className='todo-input'
      placeholder='What needs to be done?'
      value={value}
      autoFocus
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Input;
