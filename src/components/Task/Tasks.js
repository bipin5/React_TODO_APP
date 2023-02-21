import TaskItem from './TaskItem';
import Card from '../UI/Card';
import './Tasks.css';

export default function Task(props) {
  return (
    <Card className='tasks'>
      <TaskItem name={props.taskName[0].name} date={props.taskName[0].date} />
      <TaskItem name={props.taskName[1].name} date={props.taskName[1].date} />
    </Card>
  );
}
