import { ITask } from '../../types/types';
import React from 'react';
interface ITaskBoardProps {
    label: string;
    tasks: ITask[];
    addTaskToBacklog?: (title: string) => void;
    moveTask?: (taskId: number, newStatus: ITask['status']) => void;
    previousTasks?: ITask[];
    newStatus?: ITask['status'];
}
declare const TaskBoarrd: React.FC<ITaskBoardProps>;
export default TaskBoarrd;
