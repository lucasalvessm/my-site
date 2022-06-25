import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import ProfileCard from "../components/profile-card/profile-card";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lucas Moraes</title>
        <meta name="description" content="My website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <div className={styles.container}>
        <main className={styles.main}>
          <ProfileCard />

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Home;
