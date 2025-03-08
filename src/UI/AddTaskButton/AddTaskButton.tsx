import React from 'react';
import st from './AddTaskButton.module.scss';
interface ITaskButonProps {
  isDisabled: boolean;
  handleAddClick: () => void;
  isBacklog: boolean;
  isAdding: boolean;
  showDropdown: boolean;
}
const AddTaskButton: React.FC<ITaskButonProps> = ({
  isDisabled,
  handleAddClick,
  showDropdown,
  isBacklog,
  isAdding,
}) => {
  return (
    <>
      <button
        disabled={isDisabled}
        onClick={handleAddClick}
        className={`${st.addButton} ${isBacklog && isAdding ? st.submitButton : ''}`}
      >
        {isBacklog ? (
          isAdding ? (
            'Submit'
          ) : (
            <>
              <span className={st.plusSymbol}>+</span>Add card
            </>
          )
        ) : showDropdown ? (
          ''
        ) : (
          <>
            <span className={st.plusSymbol}>+</span>Add card
          </>
        )}
      </button>
    </>
  );
};

export default AddTaskButton;
