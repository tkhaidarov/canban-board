interface ITask {
    id: number;
    title: string;
    description?: string;
    status: 'backlog' | 'ready' | 'inProgress' | 'finished';
}
declare const useTasks: () => {
    tasks: ITask[];
    addTaskToBacklog: (title: string) => void;
    moveTask: (taskId: number, newStatus: ITask["status"]) => void;
    updateTaskDescription: (taskId: number, newDescription: string) => void;
};
export default useTasks;
