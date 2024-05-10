import React from 'react';
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodo(todo.id)}
    />
    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
    </span>
  </li>
);

export default TodoItem;
