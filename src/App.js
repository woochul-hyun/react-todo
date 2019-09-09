import React, { useState, useCallback } from 'react';
import TodoTemplate from './components/todoTemplate/TodoTemplate';
import TodoInsert from './components/todoInsert/TodoInsert';
import TodoList from './components/todoList/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `Todo ${i}`,
      checked: false
    });
  }
  return array;
}

function App() {
  const [todos, setTodos] = useState(createBulkTodos);

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
      setTodos(todos => todos.concat(todo));
    },
    [generateId]
  );

  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
