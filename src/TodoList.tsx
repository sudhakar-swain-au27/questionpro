import React from 'react';
import { FixedSizeList } from 'react-window';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const todo = todos[index];
    return (
      <div style={style}>
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      </div>
    );
  };

  return (
    <div style={{ height: '400px', maxWidth: '600px', margin: 'auto' }}>
      <FixedSizeList
        height={400}
        width={600}
        itemCount={todos.length}
        itemSize={50} // Height of each item in pixels
      >
        {Row}
      </FixedSizeList>
    </div>
  );
};

export default TodoList;
