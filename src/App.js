import React, { useState, useCallback } from 'react';
import TodoTemplate from './components/todoTemplate/TodoTemplate';
import TodoInsert from './components/todoInsert/TodoInsert';
import TodoList from './components/todoList/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'HTML',
      checked: true
    },
    {
      id: 2,
      text: 'CSS',
      checked: true
    },
    {
      id: 3,
      text: 'JavaScript',
      checked: false
    }
  ]);

  const generateId = useCallback(() => {
    return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }, [todos]);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: generateId(),
        text,
        checked: false
      };
      setTodos(todos.concat(todo));
    },
    [generateId, todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
