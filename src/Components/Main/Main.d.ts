import { ITask } from '../../types/types';
import React from 'react';
interface IMainProps {
    tasks: ITask[];
    addTaskToBacklog: (task: string) => void;
    moveTask: (taskId: number, newStatus: ITask['status']) => void;
}
declare const Main: React.FC<IMainProps>;
export default Main;
