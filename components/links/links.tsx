import React from 'react';
import styles from './Links.module.scss';

interface Props {
  theme: string;
}

const Links: React.FC<Props> = ({ theme }) => (
  <>
    <h1>My Links</h1>
    <div className={`${styles.grid} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <a href="https://medium.com/@lucasalvessm" className={styles.card} target="__blank">
        <h2>Medium</h2>
        <p>Read some of my articles about technology and everything else I am into it.</p>
      </a>

      <a target="__blank" href="https://www.linkedin.com/in/lucasalvessm" className={styles.card}>
        <h2>LinkedIn</h2>
        <p>Connect with me on LinkedIn and have a look in my career in depth.</p>
      </a>

      <a href="https://github.com/lucasalvessm" className={styles.card} target="__blank">
        <h2>Github</h2>
        <p>Have a look at my personal projects.</p>
      </a>

      <a href="https://www.instagram.com/lucasalves.sm" className={styles.card} target="__blank">
        <h2>Instagram</h2>
        <p>From time to time, I post one thing or another.</p>
      </a>
    </div>
  </>
);

export default Links;
