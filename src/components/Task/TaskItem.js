import React from 'react';
import TaskDate from './TaskDate';
import Card from '../UI/Card';
import './TaskItem.css';

export default function TaskItem(props) {
  return (
    <Card className='task-item'>
      <TaskDate date={props.date} />
      <div className='task-item__description'>
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
