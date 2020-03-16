import React from 'react';
import AppHeader from './components/app-header'; 
import SearchPanel from './components/search-panel'; 
import TodoList from './components/todo-list'; 

function App() {

  const todoData = [
    {label: 'Drink Coffee', important: false, id: 1},
    {label: 'Build Awesome App', important: true, id: 2},
    {label: 'Have fun', important: false, id: 3}
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={ todoData } />
    </div>
  );
}

export default App;
