import React, { useContext, useRef } from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInput = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInput.current!.value;
    if (enteredText.trim().length === 0) return;

    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={todoTextInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
