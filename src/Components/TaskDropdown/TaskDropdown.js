import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import st from './TaskDropdown.module.scss';
import DropdownIcon from '../../assets/images/svg/dropdown.svg?react';
const TaskDropdown = ({ previousTasks, handleSelectTask, setShowDropdown, }) => {
    return (_jsxs("div", { className: st.dropdownWrapper, children: [_jsx("div", { className: st.emptyField, onClick: () => setShowDropdown(prev => !prev), children: _jsx(DropdownIcon, {}) }), _jsx("ul", { className: st.dropdown, children: previousTasks &&
                    previousTasks.map((task, idx) => (_jsx("li", { className: st.dropdownItem, onClick: () => handleSelectTask(task.id), children: task.title }, idx))) })] }));
};
export default TaskDropdown;
