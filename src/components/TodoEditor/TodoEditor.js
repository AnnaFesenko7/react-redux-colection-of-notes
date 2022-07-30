import React, { useState } from 'react';
import styles from './TodoEditor.module.css';
import { useDispatch } from 'react-redux';
import todosOperations from 'redux/todos/todos-operations';

export default function TodoEditor({ onSave }) {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text === '') {
      return alert('Заполни текст заметки');
    }
    dispatch(todosOperations.addTodo(text));
    onSave();

    setText('');
  };

  return (
    <form
      className={styles.editor}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        value={text}
        onChange={handleChange}
      ></textarea>
      <button
        type="submit"
        className={styles.button}
      >
        Сохранить
      </button>
    </form>
  );
}

// const mapDispatchToProps = dispatch => ({
//   onSubmit: text => dispatch(todoActions.addTodo(text)),
// });
// export default connect(null, mapDispatchToProps)(Form);
