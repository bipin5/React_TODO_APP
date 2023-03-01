import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = (props) => {
  const [enteredTaskName, setEnteredTaskName] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredTaskName(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newTaskData = {
      name: enteredTaskName,
      date: new Date(enteredDate),
    };

    props.onSaveTaskData(newTaskData);
    setEnteredTaskName('');
    setEnteredDate('');
  };

  return (
    <>
      <h2 className='margin-right text-centre'>TODO APP</h2>
      <form onSubmit={submitHandler}>
        <div className='d-flex flex-wrap gap-1 mb-1 text-start'>
          <div className='new-task__control'>
            <label className='font-weight-bold mb-2 d-block'>Title</label>
            <input
              className='mw-100'
              type='text'
              value={enteredTaskName}
              onChange={nameChangeHandler}
            />
          </div>
          <div className='new-task__control'>
            <label className='font-weight-bold mb-2 d-block'>Date</label>
            <input
              className='mw-100'
              type='date'
              min='2020-01-01'
              max='2023-02-23'
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className='text-end'>
          <button className='mr-3 text-white' type='submit'>
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
