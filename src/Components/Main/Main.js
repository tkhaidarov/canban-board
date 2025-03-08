import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import st from './Main.module.scss';
import TaskBoarrd from '../TaskBoard/TaskBoarrd';
const Main = ({ tasks, addTaskToBacklog, moveTask }) => {
    return (_jsx("main", { className: st.main, children: _jsxs("div", { className: st.mainContainer, children: [_jsx(TaskBoarrd, { label: "Backlog", tasks: tasks.filter(task => task.status === 'backlog'), addTaskToBacklog: addTaskToBacklog }), _jsx(TaskBoarrd, { label: "Ready", tasks: tasks.filter(task => task.status === 'ready'), moveTask: moveTask, previousTasks: tasks.filter(task => task.status === 'backlog'), newStatus: 'ready' }), _jsx(TaskBoarrd, { label: "In Progress", tasks: tasks.filter(task => task.status === 'inProgress'), moveTask: moveTask, previousTasks: tasks.filter(task => task.status === 'ready'), newStatus: 'inProgress' }), _jsx(TaskBoarrd, { label: "Finished", tasks: tasks.filter(task => task.status === 'finished'), moveTask: moveTask, previousTasks: tasks.filter(task => task.status === 'inProgress'), newStatus: 'finished' })] }) }));
};
export default Main;
