import { useState, useEffect } from 'react';
import TodoForm from './ToDoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
    localStorage.removeItem('tasks');
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Список завдань</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <button onClick={clearTasks} className="clear-button">
        Очистити всі завдання
      </button>
    </div>
  );
}

export default App;