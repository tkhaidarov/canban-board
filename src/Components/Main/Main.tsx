import st from './Main.module.scss';
import { ITask } from '../../types/types';
// import TaskBoard from '../TaskBoard/TaskBoard';
import React from 'react';
import TaskBoarrd from '../TaskBoard/TaskBoarrd';

interface IMainProps {
  tasks: ITask[];
  addTaskToBacklog: (task: string) => void;
  moveTask: (taskId: number, newStatus: ITask['status']) => void;
}
const Main: React.FC<IMainProps> = ({ tasks, addTaskToBacklog, moveTask }) => {
  return (
    <main className={st.main}>
      <div className={st.mainContainer}>
        <TaskBoarrd
          label="Backlog"
          tasks={tasks.filter(task => task.status === 'backlog')}
          addTaskToBacklog={addTaskToBacklog}
        />
        <TaskBoarrd
          label="Ready"
          tasks={tasks.filter(task => task.status === 'ready')}
          moveTask={moveTask}
          previousTasks={tasks.filter(task => task.status === 'backlog')}
          newStatus={'ready'}
        />
        <TaskBoarrd
          label="In Progress"
          tasks={tasks.filter(task => task.status === 'inProgress')}
          moveTask={moveTask}
          previousTasks={tasks.filter(task => task.status === 'ready')}
          newStatus={'inProgress'}
        />
        <TaskBoarrd
          label="Finished"
          tasks={tasks.filter(task => task.status === 'finished')}
          moveTask={moveTask}
          previousTasks={tasks.filter(task => task.status === 'inProgress')}
          newStatus={'finished'}
        />
      </div>
    </main>
  );
};

export default Main;
