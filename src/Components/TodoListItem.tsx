import React from 'react';

interface Props {
  todo: Todo;
  removeTodo(textToDelete: string): void;
}

export const TodoListItem: React.FC<Props> = ({ todo, removeTodo }) => {
  return (
      <div style={{ textAlign: "center" }}>
    <span> {todo.text} </span>
    <span>
        <button onClick={() => {removeTodo(todo.text)}}>X</button>
     </span>
    </div>
  );
};