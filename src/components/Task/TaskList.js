import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = (props) => {
  if (props.tasks.length === 0) {
    return <h2 className='tasks-list__fallback'>No Tasks Found</h2>;
  }

  return (
    <ul className='tasks-list'>
      {props.tasks.map((task) => (
        <TaskItem
          tasks={props.taskName}
          key={task.id}
          id={task.id}
          name={task.name}
          date={task.date}
          onDeleteTask={props.onDeleteTask}
          onDeleteMessage={props.onDeleteMessage}
          deleteMessage={props.deleteMessage}
        />
      ))}
    </ul>
  );
};

export default TaskList;
