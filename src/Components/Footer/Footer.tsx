import st from './Footer.module.scss';
import React from 'react';
interface IFooterProps {
  backlogCount: number;
  finishedTasks: number;
}
const Footer: React.FC<IFooterProps> = ({ backlogCount, finishedTasks }) => {
  return (
    <footer className={st.footer}>
      <div className={st.footerContainer}>
        <div className={st.taskInfo}>
          <p className={st.activeTasks}>Active tasks: {`<${backlogCount}>`}</p>
          <p className={st.finishedTasks}>Finished tasks: {`<${finishedTasks}>`}</p>
        </div>
        <div className={st.aboutInfo}>
          <p>Kanban board by &lt;NAME&gt;, &lt;YEAR&gt;</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
