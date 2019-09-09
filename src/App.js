import React from 'react';
import TodoTemplate from './components/todoTemplate/TodoTemplate';
import TodoInsert from './components/todoInsert/TodoInsert';

function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
    </TodoTemplate>
  );
}

export default App;
