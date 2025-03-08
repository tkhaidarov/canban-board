import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import st from './TaskPage.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CloseButton from '../../assets/images/svg/close-button.svg?react';
const TaskPage = ({ tasks, updateTaskDescription, }) => {
    const { taskId } = useParams();
    const navigate = useNavigate();
    const task = tasks.find(task => task.id === Number(taskId));
    const [taskText, setTaskText] = useState('');
    useEffect(() => {
        if (task) {
            setTaskText(`${task.title}\n\n${task.description || 'This task has no description'}`);
        }
    }, [task]);
    if (!task) {
        return _jsx("h2", { children: "Task not found" });
    }
    const handleSave = () => {
        const [, ...descArray] = taskText.split('\n\n');
        const newDescription = descArray.join('\n\n').trim();
        updateTaskDescription(task.id, newDescription);
        navigate(-1);
    };
    return (_jsxs("div", { className: st.editorContainer, children: [_jsx("textarea", { className: st.editor, value: taskText, onChange: e => setTaskText(e.target.value) }), _jsx("button", { className: st.closeButton, onClick: handleSave, children: _jsx(CloseButton, { width: 30, height: 30 }) })] }));
};
export default TaskPage;
