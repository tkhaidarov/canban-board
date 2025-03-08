import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import st from './Header.module.scss';
import User from '@/assets/images/svg/user.svg?react';
import DropdownButton from '../../UI/DropdownButton/DropdownButton';
const Header = () => {
    return (_jsx("header", { className: st.header, children: _jsxs("div", { className: st.headerContainer, children: [_jsx("span", { className: st.headerLogo, children: "Awesome Kanban Board" }), _jsxs("div", { className: st.userMenu, children: [_jsx("div", { className: st.userAvatar, children: _jsx(User, {}) }), _jsx(DropdownButton, {})] })] }) }));
};
export default Header;
