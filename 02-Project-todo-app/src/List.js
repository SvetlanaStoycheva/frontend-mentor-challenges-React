import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const List = ({ list }) => {
  console.log(list);

  return (
    <section className='section-list'>
      {list.map((item) => {
        const { id, task } = item;
        return (
          <div className='single-task-container' key={id}>
            <button type='button' className='task-btn '>
              <AiOutlineCheckCircle />
            </button>
            <div className='task-name'>
              <p className=' task-text'>{task}</p>
              <span className='close-btn-task'>
                <IoMdClose />
              </span>
            </div>
          </div>
        );
      })}
      <div className='footer-task-container'>
        <p>5 items left</p>
        <div className='big-screen-visible-container'>
          <p className='big-screen-visible'>All</p>
          <p className='big-screen-visible'>Active</p>
          <p className='big-screen-visible'>Completed</p>
        </div>
        <p>Clear Completed</p>
      </div>
      <div className='footer-list'>
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
    </section>
  );
};

export default List;
