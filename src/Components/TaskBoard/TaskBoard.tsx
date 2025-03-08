import st from './TaskBoard.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownIcon from '../../assets/images/svg/dropdown.svg?react';

interface ITask {
  id: number;
  title: string;
  description?: string;
  status: 'backlog' | 'ready' | 'inProgress' | 'finished';
}
interface ITaskBoardProps {
  label: string;
  tasks: ITask[];
  addTaskToBacklog?: (title: string) => void;
  moveTask?: (taskId: number, newStatus: ITask['status']) => void;
  previousTasks?: ITask[];
  newStatus?: ITask['status'];
}
const TaskBoard: React.FC<ITaskBoardProps> = ({
  label,
  tasks,
  addTaskToBacklog,
  moveTask,
  previousTasks,
  newStatus,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const isBacklog = Boolean(addTaskToBacklog);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !inputRef.current ||
        inputRef.current.contains(event.target as Node)
      ) {
        return;
      }
      const addButton = document.querySelector(`.${st.addButton}`);
      if (addButton && addButton.contains(event.target as Node)) {
        return;
      }
      setIsAdding(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isAdding && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAdding]);

  const handleAddClick = () => {
    if (isBacklog) {
      if (isAdding) {
        if (newTask.trim() && addTaskToBacklog) {
          addTaskToBacklog(newTask.trim());
          setNewTask('');
          setTimeout(() => setIsAdding(false), 100);
        }
      } else {
        setIsAdding(true);
      }
    } else {
      setShowDropdown(!showDropdown);
    }
  };

  const handleSelectTask = (taskId: number) => {
    if (moveTask && newStatus) {
      moveTask(taskId, newStatus);
    }
    setShowDropdown(false);
  };

  const isBacklogEmpty = newTask.trim() === '';
  const isPreviousTaskBoardEmpty = previousTasks?.length === 0;
  const isSubmitButtonDisabled = isBacklog && isAdding && isBacklogEmpty;
  const isAddCardDisabled = !isBacklog && isPreviousTaskBoardEmpty;

  return (
    <div className={st.taskBoard}>
      <h3 className={st.taskTitle}>{label}</h3>
      <ul className={st.taskList}>
        {tasks.map(task => (
          <li key={task.id} className={st.taskItem}>
            <Link to={`/tasks/${task.id}`} className={st.taskLink}>
              {task.title}
            </Link>
          </li>
        ))}
      </ul>

      {/*Backlog board*/}
      {isAdding && addTaskToBacklog && (
        <div className={st.inputWrapper}>
          <textarea
            ref={inputRef}
            className={st.inputField}
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            placeholder="Add a task..."
          />
        </div>
      )}
      <div className={st.buttonContainer}>
        <button
          disabled={isSubmitButtonDisabled || isAddCardDisabled}
          onClick={handleAddClick}
          className={`${st.addButton} ${isBacklog && isAdding ? st.submitButton : ''}`}
        >
          {isBacklog
            ? isAdding
              ? 'Submit'
              : 'Add Task'
            : showDropdown
              ? ''
              : 'Add Task'}
        </button>
      </div>

      {showDropdown && !addTaskToBacklog && (
        <div className={st.dropdownWrapper}>
          <div
            className={st.emptyField}
            onClick={() => setShowDropdown(prev => !prev)}
          >
            <DropdownIcon />
          </div>
          <ul className={st.dropdown}>
            {previousTasks &&
              previousTasks.map((task, idx) => (
                <li
                  key={idx}
                  className={st.dropdownItem}
                  onClick={() => handleSelectTask(task.id)}
                >
                  {task.title}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskBoard;
