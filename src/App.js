import React, { useState } from 'react';
import Task from './components/Task/Tasks';
import NewTask from './components/NewTask/NewTask';

const INITIAL_TASKS = [
  {
    id: 1,
    date: new Date(2023, 2, 21),
    name: 'Create React Project',
  },
  {
    id: 2,
    date: new Date(2023, 2, 21),
    name: 'Create TODO App',
  },
];

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  return (
    <div>
      <NewTask onAddTask={addTaskHandler} />
      <Task taskName={tasks} />
    </div>
  );
}

export default App;
