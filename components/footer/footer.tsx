import Image from "next/image";

import styles from "./Footer.module.scss";

const goTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.linkList}>
      <li>
        <a href="https://www.linkedin.com/in/lucasalvessm" target="__blank">
          <i className="bi bi-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="https://medium.com/@lucasalvessm" target="__blank">
          <i className="bi bi-medium"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/lucasalvessm" target="__blank">
          <i className="bi bi-github"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/lucasalvessm" target="__blank">
          <i className="bi bi-instagram"></i>
        </a>
      </li>
    </ul>
    <button className={styles.button} onClick={goTop}>
      <i className="bi bi-arrow-up-short"></i>
    </button>
  </footer>
);

export default Footer;
