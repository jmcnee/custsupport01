import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>

      
      <Head>
        <title>PPO Customer Support</title>
        <meta name="PPO Customer Service and Support" content="Hyper Spectral Imaging Food Production" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">PPO Field Services Support</a>
        </h1>

        <p className={styles.description}>
          Your Portal to Customer Service{' '}
          <code className={styles.code}>Tools and Apps</code>
        </p>

        <div className={styles.grid}>
          <a href="/faults" className={styles.card}>
            <h2>SIS Error &amp; Fault Codes &rarr;</h2>
            <p>Find information about warnings, alerts and fault codes.</p>
          </a>

          <a href="/imaging" className={styles.card}>
            <h2>Software Imaging Tools  &rarr;</h2>
            <p>Metabase, PPO Insignts, Calibration Viewer Reports</p>
          </a>

          <a href={"https://waterkeys.ca/q2a"}
            rel='noreferrer' target="_blank"
            className={styles.card}>
            <h2>Question &amp; Answers  &rarr;</h2>
              
                <p>Ask Industry Professionals Questions</p>
                <p>Search the Answers</p>
              
            
          </a>

          <a
            href={"https://waterkeys.ca/moodle"}
            rel='noreferrer' target="_blank"
            className={styles.card}
          >
            <h2>PPO Education Center &rarr;</h2>
            <p>Review videos on popular topics</p>
            <p>Sign up for our FREE courses</p>
          </a>

          {/* The Link trick REL='NOREFERRER' */}
          {/* <a href={"https://waterkeys.ca/music"} target="_blank" rel='noreferrer'>Waterkeys Music</a>  */}
        
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      
    </div>
  )
}
