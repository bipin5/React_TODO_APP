import TaskItem from './TaskItem';
import Card from '../UI/Card';
import './Tasks.css';

export default function Task(props) {
  return (
    <Card className='tasks'>
      {props.taskName.map((task) => (
        <TaskItem key={task.id} name={task.name} date={task.date} />
      ))}
    </Card>
  );
}
