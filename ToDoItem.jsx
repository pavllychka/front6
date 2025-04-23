function TodoItem({ task, index, toggleTask, deleteTask }) {
    return (
      <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
        <span onClick={() => toggleTask(index)} className="todo-text">
          {task.text}
        </span>
        <div className="button-group">
          <button
            onClick={() => toggleTask(index)}
            className={`complete-button ${task.completed ? 'completed-button' : ''}`}
          >
            {task.completed ? 'Скасувати' : 'Виконано'}
          </button>
          <button onClick={() => deleteTask(index)} className="delete-button">
            Видалити
          </button>
        </div>
      </li>
    );
  }
  
  export default TodoItem;