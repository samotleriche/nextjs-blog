import React from 'react';
import Link from 'next/link';
import Header from '../components/header';
import LeftNav from '../components/leftNav';

import ContentLink from '../components/contentLinks';

import styles from '../styles/modules/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <main className={styles.homeGrid}>
      <Header />
      <nav className={styles.leftNav}>
        <LeftNav />
      </nav>
      <section className={styles.rightNav}>
        <nav className={styles.itemContainer}>
          <ul>
            <li>
              <Link href={`/`}>New Articles</Link>
            </li>
            <li>
              <Link href={`/items`}>New Videos</Link>
            </li>
            <li>
              <Link href={`/`}>New Videos</Link>
            </li>
          </ul>
        </nav>
        {children}
      </section>
      <aside className={styles.contentLink}>
        <ContentLink />
      </aside>
    </main>
  );
};

export default Layout;
