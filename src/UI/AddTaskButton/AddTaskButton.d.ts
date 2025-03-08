import React from 'react';
interface ITaskButonProps {
    isDisabled: boolean;
    handleAddClick: () => void;
    isBacklog: boolean;
    isAdding: boolean;
    showDropdown: boolean;
}
declare const AddTaskButton: React.FC<ITaskButonProps>;
export default AddTaskButton;
