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
      <h2>TODO APP</h2>
      <form onSubmit={submitHandler}>
        <div className='new-task__controls'>
          <div className='new-task__control'>
            <label>Title</label>
            <input
              type='text'
              value={enteredTaskName}
              onChange={nameChangeHandler}
            />
          </div>
          <div className='new-task__control'>
            <label>Date</label>
            <input
              type='date'
              min='2020-01-01'
              max='2023-02-23'
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className='new-task__actions'>
          <button type='submit'>Add Task</button>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
