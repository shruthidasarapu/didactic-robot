import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: Todo[],
  removeTodo: removeTodo,
}

export const TodoList: React.FC<Props> = ({ todos, removeTodo }) => {
       
  return (
    <div style={{ textAlign: "center" }}>
      {todos.map((todo,i) => (
          <div>
        <TodoListItem key={`${todo}-${i}`} todo={todo} removeTodo={removeTodo} />
        </div>
      ))}
    </div>
  );
};

