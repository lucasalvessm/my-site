import Image from "next/image";

import styles from "./Navbar.module.scss";

const NavBar = () => (
  <nav className={styles.navbar}>
    <Image
      className={styles.logo}
      src="/logo-light.svg"
      alt="Vercel Logo"
      width={60}
      height={60}
    />

    <i className="bi bi-brightness-high-fill"></i>
  </nav>
);

export default NavBar;
