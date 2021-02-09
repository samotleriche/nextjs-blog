import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import LeftNav from '../components/leftNav';
import FeedArea from '../components/feedArea';
import ContentLink from '../components/contentLinks';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tomas Leriche: Software</title>
      </Head>
      <Header />
      <div className={styles.homeGrid}>
        <nav className={styles.leftNav}>
          <LeftNav />
        </nav>
        <section className={styles.rightNav}>
          <FeedArea />
        </section>
        <aside className={styles.contentLink}>
          <ContentLink />
        </aside>
      </div>
    </>
  );
}
