import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import st from './TaskBoard.module.scss';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownIcon from '../../assets/images/svg/dropdown.svg?react';
const TaskBoard = ({ label, tasks, addTaskToBacklog, moveTask, previousTasks, newStatus, }) => {
    const [isAdding, setIsAdding] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const isBacklog = Boolean(addTaskToBacklog);
    const inputRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!inputRef.current ||
                inputRef.current.contains(event.target)) {
                return;
            }
            const addButton = document.querySelector(`.${st.addButton}`);
            if (addButton && addButton.contains(event.target)) {
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
    return (_jsxs("div", { className: st.taskBoard, children: [_jsx("h3", { className: st.taskTitle, children: label }), _jsx("ul", { className: st.taskList, children: tasks.map(task => (_jsx("li", { className: st.taskItem, children: _jsx(Link, { to: `/tasks/${task.id}`, className: st.taskLink, children: task.title }) }, task.id))) }), isAdding && addTaskToBacklog && (_jsx("div", { className: st.inputWrapper, children: _jsx("textarea", { ref: inputRef, className: st.inputField, value: newTask, onChange: e => setNewTask(e.target.value), placeholder: "Add a task..." }) })), _jsx("div", { className: st.buttonContainer, children: _jsx("button", { disabled: isSubmitButtonDisabled || isAddCardDisabled, onClick: handleAddClick, className: `${st.addButton} ${isBacklog && isAdding ? st.submitButton : ''}`, children: isBacklog
                        ? isAdding
                            ? 'Submit'
                            : 'Add Task'
                        : showDropdown
                            ? ''
                            : 'Add Task' }) }), showDropdown && !addTaskToBacklog && (_jsxs("div", { className: st.dropdownWrapper, children: [_jsx("div", { className: st.emptyField, onClick: () => setShowDropdown(prev => !prev), children: _jsx(DropdownIcon, {}) }), _jsx("ul", { className: st.dropdown, children: previousTasks &&
                            previousTasks.map((task, idx) => (_jsx("li", { className: st.dropdownItem, onClick: () => handleSelectTask(task.id), children: task.title }, idx))) })] }))] }));
};
export default TaskBoard;
