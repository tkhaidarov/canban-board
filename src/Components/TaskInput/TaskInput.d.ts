import React from 'react';
interface ITaskInputProps {
    newTask: string;
    setNewTask: (value: string) => void;
    isAdding: boolean;
}
declare const TaskInput: React.FC<ITaskInputProps>;
export default TaskInput;
