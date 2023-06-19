import Item from '../Item/Item';
import React from 'react';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface ListProps {
  todos: Todo[];
}

const List: React.FC<ListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Item
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
};

export default List;
