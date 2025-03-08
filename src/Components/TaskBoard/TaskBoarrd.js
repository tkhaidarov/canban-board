import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import st from './TaskBoard.module.scss';
import { useRef, useState } from 'react';
import TaskList from '../TaskList/TaskList';
import TaskInput from '../TaskInput/TaskInput';
import useClickOutside from '../../hooks/useClickOutside';
import TaskDropdown from '../TaskDropdown/TaskDropdown';
import AddTaskButton from '../../UI/AddTaskButton/AddTaskButton';
const TaskBoarrd = ({ label, tasks, addTaskToBacklog, moveTask, previousTasks, newStatus, }) => {
    const [isAdding, setIsAdding] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const isBacklog = Boolean(addTaskToBacklog);
    const boardRef = useRef(null);
    useClickOutside(boardRef, () => setIsAdding(false));
    const handleAddClick = () => {
        if (isBacklog) {
            if (isAdding) {
                if (newTask.trim() && addTaskToBacklog) {
                    addTaskToBacklog(newTask.trim());
                    setNewTask('');
                    setTimeout(() => setIsAdding(false), 100);
                }
            }
            else {
                setIsAdding(true);
            }
        }
        else {
            setShowDropdown(!showDropdown);
        }
    };
    const handleSelectTask = (taskId) => {
        if (moveTask && newStatus) {
            moveTask(taskId, newStatus);
        }
        setShowDropdown(false);
    };
    const isBacklogEmpty = newTask.trim() === '';
    const isPreviousTaskBoardEmpty = previousTasks?.length === 0;
    const isSubmitButtonDisabled = isBacklog && isAdding && isBacklogEmpty;
    const isAddCardDisabled = !isBacklog && isPreviousTaskBoardEmpty;
    return (_jsxs("div", { className: st.taskBoard, ref: boardRef, children: [_jsx("h3", { className: st.taskTitle, children: label }), _jsx(TaskList, { tasks: tasks }), isAdding && addTaskToBacklog && (_jsx(TaskInput, { newTask: newTask, setNewTask: setNewTask, isAdding: isAdding })), _jsx("div", { className: st.buttonContainer, children: _jsx(AddTaskButton, { isDisabled: isSubmitButtonDisabled || isAddCardDisabled, handleAddClick: handleAddClick, isBacklog: isBacklog, isAdding: isAdding, showDropdown: showDropdown }) }), showDropdown && !addTaskToBacklog && (_jsx(TaskDropdown, { previousTasks: previousTasks ?? [], handleSelectTask: handleSelectTask, setShowDropdown: setShowDropdown }))] }));
};
export default TaskBoarrd;
