import React, { useEffect, useContext, useReducer } from 'react';
import reducer from './reducer';

const getStorageList = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

const initialState = {
  currentList: getStorageList(),
  //   allTasks: getStorageAllTasks(),
};

const ListContext = React.createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTask = (taskInput) => {
    if (taskInput) {
      dispatch({ type: 'ADD_TASK', payload: taskInput });
    }
    taskInput = '';
  };

  const deleteItem = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: id });
  };

  const setTaskComleted = (e) => {
    const currentButton = e.currentTarget;
    const id = currentButton.id;
    dispatch({ type: 'SET_TASK_COMPLETED', payload: id });
  };

  const showAll = (e) => {
    e.target.classList.add('active-btn');

    console.log(e.target);

    dispatch({ type: 'SHOW_ALL' });
  };
  const showActive = () => {
    dispatch({ type: 'SHOW_ACTIVE' });
  };
  const showCompleted = () => {};

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(state.currentList));
  }, [state.currentList]);

  return (
    <ListContext.Provider
      value={{
        ...state,
        handleAddTask,
        deleteItem,
        setTaskComleted,
        showAll,
        showActive,
        showCompleted,
        clearCompleted,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
// make sure use
export const useListContext = () => {
  return useContext(ListContext);
};
