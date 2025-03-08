import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import TaskPage from './Components/TaskPage/TaskPage';
import { Routes, Route } from 'react-router-dom';
import useTasks from './hooks/useTasks';

function App() {
  const { tasks, addTaskToBacklog, moveTask, updateTaskDescription } = useTasks();
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main tasks={tasks} addTaskToBacklog={addTaskToBacklog} moveTask={moveTask} />}
        />
        <Route
          path="/tasks/:taskId"
          element={<TaskPage tasks={tasks} updateTaskDescription={updateTaskDescription} />}
        />
      </Routes>
      <Footer
        backlogCount={tasks.filter(task => task.status === 'backlog').length}
        finishedTasks={tasks.filter(task => task.status === 'finished').length}
      />
    </div>
  );
}

export default App;
