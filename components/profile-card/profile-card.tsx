import Image from "next/image";

import styles from "./ProfileCard.module.scss";

const ProfileCard = () => (
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      <Image
        className={styles.image}
        src="/profile_tiny.jpg"
        alt="Profile Image"
        width={300}
        height={300}
      />
    </div>
    <h1 className={styles.title}>
      <span>Hi, I am</span> <br />
      <b>Lucas Moraes</b>
    </h1>
    <h2 className={styles.subtitle}>Software Developer</h2>
  </div>
);

export default ProfileCard;
