import Card from '../UI/Card';
import './Tasks.css';
import TaskList from './TaskList';

export default function Task(props) {
  return (
    <Card className='tasks'>
      <TaskList
        tasks={props.taskName}
        onDeleteTask={props.onDeleteTask}
        onDeleteMessage={props.onDeleteMessage}
        deleteMessage={props.deleteMessage}
      />
    </Card>
  );
}
