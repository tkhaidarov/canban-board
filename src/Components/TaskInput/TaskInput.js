import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import st from './TaskInput.module.scss';
const TaskInput = ({ newTask, setNewTask, isAdding }) => {
    const inputRef = useRef(null);
    useEffect(() => {
        if (isAdding && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isAdding]);
    const inputClass = `${st.inputWrapper} ${isAdding ? st.show : ''}`;
    console.log('isAdding:', isAdding);
    return (_jsx("div", { className: inputClass, children: _jsx("textarea", { ref: inputRef, className: st.inputField, value: newTask, onChange: e => setNewTask(e.target.value), placeholder: "Add a task..." }) }));
};
export default TaskInput;
