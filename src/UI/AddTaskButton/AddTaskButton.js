import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import st from './AddTaskButton.module.scss';
const AddTaskButton = ({ isDisabled, handleAddClick, showDropdown, isBacklog, isAdding, }) => {
    return (_jsx(_Fragment, { children: _jsx("button", { disabled: isDisabled, onClick: handleAddClick, className: `${st.addButton} ${isBacklog && isAdding ? st.submitButton : ''}`, children: isBacklog ? (isAdding ? ('Submit') : (_jsxs(_Fragment, { children: [_jsx("span", { className: st.plusSymbol, children: "+" }), "Add card"] }))) : showDropdown ? ('') : (_jsxs(_Fragment, { children: [_jsx("span", { className: st.plusSymbol, children: "+" }), "Add card"] })) }) }));
};
export default AddTaskButton;
