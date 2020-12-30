import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header';
import LeftNav from '../components/leftNav';

export default function Home() {
  return (
    <>
    <Header/>
    <div className={styles.homeGrid}>
      <nav className={styles.leftNav}>
        <LeftNav/>
      </nav>
      <section className={styles.rightNav}>
        right grid
      </section>
      
    </div>

    </>
  )
}
