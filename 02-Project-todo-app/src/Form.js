import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useListContext } from './context';

const Form = () => {
  const { handleAddTask } = useListContext();
  const [task, setTask] = useState('');
  return (
    <div className='form-container'>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          className='form-input'
          placeholder='Create a new todo...'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className='form-btn'
          type='submit'
          onClick={() => {
            handleAddTask(task);
          }}
        >
          <span className='submit-icon'>
            <AiOutlinePlus />
          </span>{' '}
          <span className='submit-text'> Add Task</span>
        </button>
      </form>
    </div>
  );
};

export default Form;
