import st from './TaskPage.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import CloseButton from '../../assets/images/svg/close-button.svg?react';

interface ITask {
  id: number;
  title: string;
  description?: string;
  status: 'backlog' | 'ready' | 'inProgress' | 'finished';
}

interface ITaskPageProps {
  tasks: ITask[];
  updateTaskDescription: (taskId: number, description: string) => void;
}

const TaskPage: React.FC<ITaskPageProps> = ({
  tasks,
  updateTaskDescription,
}) => {
  const { taskId } = useParams<{ taskId: string }>();
  const navigate = useNavigate();
  const task = tasks.find(task => task.id === Number(taskId));
  const [taskText, setTaskText] = useState('');
  useEffect(() => {
    if (task) {
      setTaskText(
        `${task.title}\n\n${task.description || 'This task has no description'}`,
      );
    }
  }, [task]);
  if (!task) {
    return <h2>Task not found</h2>;
  }
  const handleSave = () => {
    const [, ...descArray] = taskText.split('\n\n');
    const newDescription = descArray.join('\n\n').trim();
    updateTaskDescription(task.id, newDescription);
    navigate(-1);
  };
  return (
    <div className={st.editorContainer}>
      <textarea
        className={st.editor}
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
      />
      <button className={st.closeButton} onClick={handleSave}>
        <CloseButton width={30} height={30} />
      </button>
    </div>
  );
};

export default TaskPage;
