import Image from "next/image";

import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by Lucas Moraes
    </a>
  </footer>
);

export default Footer;
