import Image from "next/image";

import styles from "./ProfileCard.module.scss";

const ProfileCard = () => (
  <div className={styles.container}>
    <div className={styles.image}>
      <Image
        src="/profile_tiny.jpg"
        alt="Profile Image"
        width={300}
        height={300}
      />
    </div>
    <h1 className={styles.title}>
      Olá! Sou o <b>Lucas Moraes</b>
    </h1>
    <h2 className={styles.subtitle}>Software Developer</h2>
  </div>
);

export default ProfileCard;
