import React, { useEffect, useRef } from 'react';
import st from './TaskInput.module.scss';

interface ITaskInputProps {
  newTask: string;
  setNewTask: (value: string) => void;
  isAdding: boolean;
}

const TaskInput: React.FC<ITaskInputProps> = ({ newTask, setNewTask, isAdding }) => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (isAdding && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAdding]);
  const inputClass = `${st.inputWrapper} ${isAdding ? st.show : ''}`;
  console.log('isAdding:', isAdding);
  return (
    <div className={inputClass}>
      <textarea
        ref={inputRef}
        className={st.inputField}
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="Add a task..."
      />
    </div>
  );
};
export default TaskInput;
