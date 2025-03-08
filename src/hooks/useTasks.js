import { useEffect, useState } from 'react';
const useTasks = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);
    const addTaskToBacklog = (title) => {
        const newTask = {
            id: Date.now(),
            title,
            description: '',
            status: 'backlog',
        };
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks, newTask];
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    };
    const moveTask = (taskId, newStatus) => {
        setTasks(prevTasks => {
            const updatedTasks = prevTasks.map(task => task.id === taskId ? { ...task, status: newStatus } : task);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    };
    const updateTaskDescription = (taskId, newDescription) => {
        setTasks(prevTasks => {
            const updatedTasks = prevTasks.map(task => task.id === taskId ? { ...task, description: newDescription } : task);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    };
    return { tasks, addTaskToBacklog, moveTask, updateTaskDescription };
};
export default useTasks;
