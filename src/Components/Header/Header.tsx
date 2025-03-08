import st from './Header.module.scss';
import User from '@/assets/images/svg/user.svg?react';
import DropdownButton from '../../UI/DropdownButton/DropdownButton';

const Header = () => {
  return (
    <header className={st.header}>
      <div className={st.headerContainer}>
        <span className={st.headerLogo}>Awesome Kanban Board</span>
        <div className={st.userMenu}>
          <div className={st.userAvatar}>
            <User />
          </div>
          <DropdownButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
