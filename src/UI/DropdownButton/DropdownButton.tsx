import ButtonIcon from '@/assets/images/svg/dropdown-icon.svg?react';
import st from './DropdownButton.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown: React.MouseEventHandler<HTMLButtonElement> = event => {
    event.stopPropagation();
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const outsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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

  return (
    <>
      <button className={st.dropdownButton} onClick={toggleDropdown}>
        <ButtonIcon
          className={`${st.triangleIcon} ${isOpen ? st.rotated : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={st.dropdownContainer}
            ref={dropdownRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <ul className={st.dropdownList}>
              <li className={st.dropdownItem}>Profile</li>
              <li className={st.dropdownItem}>Log out</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DropdownButton;
