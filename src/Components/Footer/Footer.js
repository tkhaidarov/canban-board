import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import st from './Footer.module.scss';
const Footer = ({ backlogCount, finishedTasks }) => {
    return (_jsx("footer", { className: st.footer, children: _jsxs("div", { className: st.footerContainer, children: [_jsxs("div", { className: st.taskInfo, children: [_jsxs("p", { className: st.activeTasks, children: ["Active tasks: ", `<${backlogCount}>`] }), _jsxs("p", { className: st.finishedTasks, children: ["Finished tasks: ", `<${finishedTasks}>`] })] }), _jsx("div", { className: st.aboutInfo, children: _jsx("p", { children: "Kanban board by NAME, YEAR " }) })] }) }));
};
export default Footer;
