import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import TaskPage from './Components/TaskPage/TaskPage';
import { Routes, Route } from 'react-router-dom';
import useTasks from './hooks/useTasks';
function App() {
    const { tasks, addTaskToBacklog, moveTask, updateTaskDescription } = useTasks();
    return (_jsxs("div", { className: "container", children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Main, { tasks: tasks, addTaskToBacklog: addTaskToBacklog, moveTask: moveTask }) }), _jsx(Route, { path: "/tasks/:taskId", element: _jsx(TaskPage, { tasks: tasks, updateTaskDescription: updateTaskDescription }) })] }), _jsx(Footer, { backlogCount: tasks.filter(task => task.status === 'backlog').length, finishedTasks: tasks.filter(task => task.status === 'finished').length })] }));
}
export default App;
