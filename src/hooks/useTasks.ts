import { useEffect, useState } from 'react';
interface ITask {
  id: number;
  title: string;
  description?: string;
  status: 'backlog' | 'ready' | 'inProgress' | 'finished';
}

const useTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTaskToBacklog = (title: string) => {
    const newTask = {
      id: Date.now(),
      title,
      description: '',
      status: 'backlog' as const,
    };
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const moveTask = (taskId: number, newStatus: ITask['status']) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const updateTaskDescription = (taskId: number, newDescription: string) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task =>
        task.id === taskId ? { ...task, description: newDescription } : task,
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };
  return { tasks, addTaskToBacklog, moveTask, updateTaskDescription };
};
export default useTasks;
