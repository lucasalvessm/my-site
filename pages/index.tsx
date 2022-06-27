import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/footer/footer';
import Links from '../components/links/links';
import NavBar from '../components/navbar/navbar';
import ProfileCard from '../components/profile-card/profile-card';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  const [theme, setTheme] = useState<string>('dark');

  const toggleGlobalTheme = () => {
    let newTheme: string;
    if (theme === 'dark') {
      newTheme = 'light';
    } else {
      newTheme = 'dark';
    }
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    let currentTheme = localStorage.getItem('theme');
    if (currentTheme !== 'dark' && currentTheme !== 'light') {
      setTheme('dark');
    } else {
      setTheme(currentTheme);
    }
  }, []);

  return (
    <div className={`${theme} ${styles.home}`}>
      <Head>
        <title>Lucas Moraes</title>
        <meta name="description" content="My website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar toggleGlobalTheme={toggleGlobalTheme} theme={theme} />

      <div className={styles.container}>
        <main className={styles.main}>
          <ProfileCard />

          <Links theme={theme} />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
