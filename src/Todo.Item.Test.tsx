import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

test('renders todo item', () => {
  const todo = {
    id: 1,
    text: 'Test Todo',
    completed: false,
  };
  const toggleTodo = jest.fn();
  const { getByText } = render(<TodoItem todo={todo} toggleTodo={toggleTodo} />);
  const todoText = getByText('Test Todo');
  expect(todoText).toBeInTheDocument();
});

test('calls toggleTodo function when checkbox is clicked', () => {
  const todo = {
    id: 1,
    text: 'Test Todo',
    completed: false,
  };
  const toggleTodo = jest.fn();
  const { getByTestId } = render(<TodoItem todo={todo} toggleTodo={toggleTodo} />);
  const checkbox = getByTestId('todo-checkbox');
  fireEvent.click(checkbox);
  expect(toggleTodo).toHaveBeenCalledWith(1);
});
