import React from 'react';
import st from './TaskList.module.scss';
import TaskItem from '../TaskItem/TaskItem';
interface ITaskListProps {
  tasks: { id: number; title: string }[];
}
const TaskList: React.FC<ITaskListProps> = ({ tasks }) => {
  return (
    <ul className={st.taskList}>
      {tasks.map(task => (
        <TaskItem key={task.id} id={task.id} title={task.title} />
      ))}
    </ul>
  );
};

export default TaskList;
