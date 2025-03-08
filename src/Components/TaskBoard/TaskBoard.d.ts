import React from 'react';
interface ITask {
    id: number;
    title: string;
    description?: string;
    status: 'backlog' | 'ready' | 'inProgress' | 'finished';
}
interface ITaskBoardProps {
    label: string;
    tasks: ITask[];
    addTaskToBacklog?: (title: string) => void;
    moveTask?: (taskId: number, newStatus: ITask['status']) => void;
    previousTasks?: ITask[];
    newStatus?: ITask['status'];
}
declare const TaskBoard: React.FC<ITaskBoardProps>;
export default TaskBoard;
