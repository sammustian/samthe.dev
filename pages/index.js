/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { useRef } from 'react';
import Typewriter from '../components/Typewriter/Typewriter';


export default function Home() {
  const words =  ['Problem Solver.', 'Professional Googler.', 'Tech Enthusiast.', 'Ameuter Dungeon Master.', 'One Wheeler.', 'Web Developer.'];

  return (
    <div className={styles.container}>
      <Head>
        <title>Sam the Dev</title>
        <meta name="description" content="Dev Portfoilo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <div className={styles.introHeader}>
            <h1>Hi,<br></br>
              I'm Sam,<br></br>
              I am a <Typewriter words={words} />
            </h1>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Magic
        </a>
      </footer> */}
    </div>
  )
}
