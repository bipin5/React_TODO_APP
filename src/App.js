import React, { useState } from 'react';
import Task from './components/Task/Tasks';
import NewTask from './components/NewTask/NewTask';

const INITIAL_TASKS = [
  {
    id: 1,
    date: new Date('2023-02-21'),
    name: 'Create React Project',
  },
  {
    id: 2,
    date: new Date('2023-03-01'),
    name: 'Create TODO App',
  },
];

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  const deleteTaskHandler = (id) => {
    const remainingTasks = [...tasks].filter((task) => id !== task.id);
    setTasks(remainingTasks);
    handleToastMessage(true);
  };

  const handleToastMessage = () => {
    setDeleteMessage('Deleted Successfully!!!');
    setTimeout(() => {
      setDeleteMessage(false);
    }, 900);
  };

  return (
    <div>
      <NewTask onAddTask={addTaskHandler} />

      <Task
        taskName={tasks}
        onDeleteTask={deleteTaskHandler}
        onDeleteMessage={handleToastMessage}
        deleteMessage={deleteMessage}
      />
      <div
        style={{
          backgroundColor: deleteMessage ? 'rosybrown' : '',
          border: deleteMessage ? '0em solid #40005d' : '',
          borderRadius: deleteMessage ? '1em' : '',
        }}
        onChange={handleToastMessage}
      >
        <div>{deleteMessage}</div>
      </div>
    </div>
  );
}

export default App;
