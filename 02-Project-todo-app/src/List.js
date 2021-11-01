import React, { useState, useEffect } from 'react';
import { useListContext } from './context';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const List = () => {
  const {
    currentList,
    deleteItem,
    setTaskComleted,
    clearCompleted,
  } = useListContext();

  const [list, setList] = useState(currentList);
  const showActive = () => {
    setList(currentList.filter((item) => item.active));
  };
  const showCompleted = () => {
    setList(currentList.filter((item) => !item.active));
  };
  const showAll = () => {
    setList(currentList);
  };

  return (
    <section className='section-list'>
      {list.map((item) => {
        const { id, task, active } = item;
        return (
          <div className=' single-task-container' key={id}>
            <button
              type='button'
              className={`${
                active ? 'task-btn' : 'task-btn task-btn-completed'
              }`}
              onClick={setTaskComleted}
              id={id}
            >
              <AiOutlineCheckCircle />
            </button>
            <div className='task-name'>
              <p className={`${active ? 'task-text' : 'task-text-completed'}`}>
                {task}
              </p>
              <span className='close-btn-task' onClick={() => deleteItem(id)}>
                <IoMdClose />
              </span>
            </div>
          </div>
        );
      })}

      <div className='footer-task-container'>
        <button>{currentList.length} items left</button>
        <div className='big-screen-visible-container'>
          <button className='big-screen-visible' onClick={showAll}>
            All
          </button>
          <button className='big-screen-visible' onClick={showActive}>
            Active
          </button>
          <button className='big-screen-visible' onClick={showCompleted}>
            Completed
          </button>
        </div>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
      <div className='footer-list'>
        <button onClick={showAll}>All</button>
        <button onClick={showActive}>Active</button>
        <button onClick={showCompleted}>Completed</button>
      </div>
    </section>
  );
};

export default List;
