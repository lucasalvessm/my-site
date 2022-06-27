import React from 'react';
import Image from 'next/image';

import styles from './Navbar.module.scss';

interface Props {
  toggleGlobalTheme: () => void;
  theme: string;
}

const NavBar: React.FC<Props> = ({ toggleGlobalTheme, theme }: Props) => {
  const changeTheme = () => {
    toggleGlobalTheme();
  };

  return (
    <nav className={styles.navbar}>
      <Image
        className={styles.logo}
        src={theme === 'light' ? '/logo-dark.svg' : '/logo-light.svg'}
        alt="Lucas Moraes logo"
        width={60}
        height={60}
      />
      <i
        onClick={changeTheme}
        className={theme === 'dark' ? 'bi bi-brightness-high-fill' : 'bi bi-moon-stars-fill'}></i>
    </nav>
  );
};
export default NavBar;
