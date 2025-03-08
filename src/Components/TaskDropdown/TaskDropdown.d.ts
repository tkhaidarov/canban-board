import React from 'react';
interface ITaskDropdown {
    previousTasks: {
        id: number;
        title: string;
    }[];
    handleSelectTask: (taskId: number) => void;
    setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}
declare const TaskDropdown: React.FC<ITaskDropdown>;
export default TaskDropdown;
