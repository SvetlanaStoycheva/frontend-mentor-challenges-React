import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useListContext } from './context';

const Form = () => {
  const { handleAddTask, taskInput } = useListContext();
  return (
    <div className='form-container'>
      <form onSubmit={(e) => e.preventDefault()}>
        <button className='form-btn'>
          <AiOutlineCheckCircle />
        </button>
        <input
          type='text'
          className='form-input'
          placeholder='Create a new todo...'
          value={taskInput}
          onClick={(e) => handleAddTask(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Form;
