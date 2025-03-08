import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import st from './TaskItem.module.scss';
const TaskItem = ({ id, title }) => {
    return (_jsx("li", { className: st.taskItem, children: _jsx(Link, { to: `/tasks/${id}`, className: st.taskLink, children: title }) }));
};
export default TaskItem;
