import React from 'react';
interface ITaskListProps {
    tasks: {
        id: number;
        title: string;
    }[];
}
declare const TaskList: React.FC<ITaskListProps>;
export default TaskList;
