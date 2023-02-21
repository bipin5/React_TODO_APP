import './TaskDate.css';

export default function TaskDate(props) {
  const taskDate = props.date;
  const month = taskDate.toLocaleString('en-US', { month: 'long' });
  const day = taskDate.toLocaleString('en-US', { day: '2-digit' });
  const year = taskDate.getFullYear();

  return (
    <div className='task-date'>
      <div className='task-date__month'>{month}</div>
      <div className='task-date__day'>{day}</div>
      <div className='task-date__year'>{year}</div>
    </div>
  );
}
