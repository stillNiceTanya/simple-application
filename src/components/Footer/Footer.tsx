import './Footer.scss';
import React from 'react';

interface FooterProps {
  itemsCount: number;

  showAll: () => void;
  showActive: () => void;
  showCompleted: () => void;
  clearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({
  itemsCount,
  showAll,
  showActive,
  showCompleted,
  clearCompleted,
}) => {
  return (
    <div className='todo-footer'>
      <span className='todo-footer__count'>{itemsCount} items left</span>
      <div className='todo-footer__buttons'>
        <button onClick={showAll}>All</button>
        <button onClick={showActive}>Active</button>
        <button onClick={showCompleted}>Completed</button>
      </div>
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
};

export default Footer;
