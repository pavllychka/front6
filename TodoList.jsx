import TodoItem from './ToDoItem';

function TodoList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;