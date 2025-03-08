import st from './TaskBoard.module.scss';
import { ITask } from '../../types/types';
import React, { useRef, useState } from 'react';
import TaskList from '../TaskList/TaskList';
import TaskInput from '../TaskInput/TaskInput';
import useClickOutside from '../../hooks/useClickOutside';
import TaskDropdown from '../TaskDropdown/TaskDropdown';
import AddTaskButton from '../../UI/AddTaskButton/AddTaskButton';

interface ITaskBoardProps {
  label: string;
  tasks: ITask[];
  addTaskToBacklog?: (title: string) => void;
  moveTask?: (taskId: number, newStatus: ITask['status']) => void;
  previousTasks?: ITask[];
  newStatus?: ITask['status'];
}
const TaskBoarrd: React.FC<ITaskBoardProps> = ({
  label,
  tasks,
  addTaskToBacklog,
  moveTask,
  previousTasks,
  newStatus,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const isBacklog = Boolean(addTaskToBacklog);
  const boardRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(boardRef as React.RefObject<HTMLElement>, () => setIsAdding(false));

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
    <div className={st.taskBoard} ref={boardRef}>
      <h3 className={st.taskTitle}>{label}</h3>
      <TaskList tasks={tasks} />

      {isAdding && addTaskToBacklog && (
        <TaskInput newTask={newTask} setNewTask={setNewTask} isAdding={isAdding} />
      )}
      <div className={st.buttonContainer}>
        <AddTaskButton
          isDisabled={isSubmitButtonDisabled || isAddCardDisabled}
          handleAddClick={handleAddClick}
          isBacklog={isBacklog}
          isAdding={isAdding}
          showDropdown={showDropdown}
        />
      </div>

      {showDropdown && !addTaskToBacklog && (
        <TaskDropdown
          previousTasks={previousTasks ?? []}
          handleSelectTask={handleSelectTask}
          setShowDropdown={setShowDropdown}
        />
      )}
    </div>
  );
};

export default TaskBoarrd;
