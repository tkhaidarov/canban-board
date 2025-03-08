import React from 'react';
interface ITask {
    id: number;
    title: string;
    description?: string;
    status: 'backlog' | 'ready' | 'inProgress' | 'finished';
}
interface ITaskPageProps {
    tasks: ITask[];
    updateTaskDescription: (taskId: number, description: string) => void;
}
declare const TaskPage: React.FC<ITaskPageProps>;
export default TaskPage;
