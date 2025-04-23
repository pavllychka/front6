import { useState } from 'react';

function TodoForm({ addTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };

  return (
    <div className="form-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введіть нове завдання"
        className="form-input"
      />
      <button onClick={handleSubmit} className="form-button">
        Додати завдання
      </button>
    </div>
  );
}

export default TodoForm;