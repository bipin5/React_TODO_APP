import Task from './components/Task/Tasks';
import './App.css';
function App() {
  const tasks = [
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

  return (
    <div className='app'>
      <h1>TODO APP</h1>
      <Task taskName={tasks} />
    </div>
  );
}

export default App;
