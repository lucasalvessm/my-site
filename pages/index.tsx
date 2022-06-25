import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer/footer";
import Links from "../components/links/links";
import NavBar from "../components/navbar/navbar";
import ProfileCard from "../components/profile-card/profile-card";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Lucas Moraes</title>
        <meta name="description" content="My website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <div className={styles.container}>
        <main className={styles.main}>
          <ProfileCard />

          <Links />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
