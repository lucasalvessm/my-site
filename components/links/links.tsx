import styles from "./Links.module.scss";

const Links = () => (
  <>
    <h1>My Links</h1>
    <div className={styles.grid}>
      <a href="https://medium.com/@lucasalvessm" className={styles.card}>
        <h2>Medium</h2>
        <p>
          Read some of my articles about technology and everything else I am
          into it.
        </p>
      </a>

      <a
        href="https://www.linkedin.com/in/lucasalvessm"
        className={styles.card}
      >
        <h2>LinkedIn</h2>
        <p>
          Connect with me on LinkedIn and have a look in my career in depth.
        </p>
      </a>

      <a href="https://github.com/lucasalvessm" className={styles.card}>
        <h2>Github</h2>
        <p>Have a look at my personal projects.</p>
      </a>

      <a href="https://www.instagram.com/lucasalves.sm" className={styles.card}>
        <h2>Instagram</h2>
        <p>From time to time, I post one thing or another.</p>
      </a>
    </div>
  </>
);

export default Links;
