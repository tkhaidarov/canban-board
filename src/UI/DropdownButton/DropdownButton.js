import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ButtonIcon from '@/assets/images/svg/dropdown-icon.svg?react';
import st from './DropdownButton.module.scss';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
const DropdownButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const toggleDropdown = event => {
        event.stopPropagation();
        setIsOpen(prev => !prev);
    };
    useEffect(() => {
        const outsideClick = (event) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                setTimeout(() => setIsOpen(false), 100); // Даем время toggleDropdown выполниться
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', outsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', outsideClick);
        };
    }, [isOpen]);
    return (_jsxs(_Fragment, { children: [_jsx("button", { className: st.dropdownButton, onClick: toggleDropdown, children: _jsx(ButtonIcon, { className: `${st.triangleIcon} ${isOpen ? st.rotated : ''}` }) }), _jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { className: st.dropdownContainer, ref: dropdownRef, initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.95 }, transition: { duration: 0.2, ease: 'easeInOut' }, children: _jsxs("ul", { className: st.dropdownList, children: [_jsx("li", { className: st.dropdownItem, children: "Profile" }), _jsx("li", { className: st.dropdownItem, children: "Log out" })] }) })) })] }));
};
export default DropdownButton;
