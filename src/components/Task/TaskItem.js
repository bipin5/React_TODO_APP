import React from 'react';
import TaskDate from './TaskDate';
import Card from '../UI/Card';
import './TaskItem.css';

export default function TaskItem(props) {
  return (
    <Card className='task-item d-flex align-items-center'>
      <TaskDate date={props.date} />
      <div className='task-item__description d-flex flex-column-sm align-items-end-sm justify-content-start-sm'>
        <h2>{props.name}</h2>
        <button
          className='task-item__delete'
          onClick={() => {
            props.onDeleteTask(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </Card>
  );
}
