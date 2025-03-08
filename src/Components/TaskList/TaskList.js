import { jsx as _jsx } from "react/jsx-runtime";
import st from './TaskList.module.scss';
import TaskItem from '../TaskItem/TaskItem';
const TaskList = ({ tasks }) => {
    return (_jsx("ul", { className: st.taskList, children: tasks.map(task => (_jsx(TaskItem, { id: task.id, title: task.title }, task.id))) }));
};
export default TaskList;
