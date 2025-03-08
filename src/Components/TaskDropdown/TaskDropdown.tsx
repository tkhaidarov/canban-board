import st from './TaskDropdown.module.scss';
import DropdownIcon from '../../assets/images/svg/dropdown.svg?react';
import React from 'react';

interface ITaskDropdown {
  previousTasks: { id: number; title: string }[];
  handleSelectTask: (taskId: number) => void;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}
const TaskDropdown: React.FC<ITaskDropdown> = ({
  previousTasks,
  handleSelectTask,
  setShowDropdown,
}) => {
  return (
    <div className={st.dropdownWrapper}>
      <div className={st.emptyField} onClick={() => setShowDropdown(prev => !prev)}>
        <DropdownIcon />
      </div>
      <ul className={st.dropdown}>
        {previousTasks &&
          previousTasks.map((task, idx) => (
            <li key={idx} className={st.dropdownItem} onClick={() => handleSelectTask(task.id)}>
              {task.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TaskDropdown;
