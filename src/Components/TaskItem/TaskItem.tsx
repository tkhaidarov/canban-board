import { Link } from 'react-router-dom';
import st from './TaskItem.module.scss';

interface TaskItemProps {
  id: number;
  title: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, title }) => {
  return (
    <li className={st.taskItem}>
      <Link to={`/tasks/${id}`} className={st.taskLink}>
        {title}
      </Link>
    </li>
  );
};

export default TaskItem;
