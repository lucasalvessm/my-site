import Image from "next/image";

import styles from "./Navbar.module.scss";

const NavBar = () => (
  <nav className={styles.navbar}>
    <Image src="/logo-light.svg" alt="Vercel Logo" width={60} height={60} />
  </nav>
);

export default NavBar;
