import React from 'react';

import styles from '../styles/modules/Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.profileImage}>
        <img src="/profile.jpg" alt="me" className={styles.profile} />
      </div>
      <div className={styles.headerText}>
        <h2 className={styles.headerTitleName}>Tomas Leriche</h2>
        <div className={styles.titleList}>
          <h4>Full Stack Engineer</h4>
          <h4>Instructor</h4>
          <h4>Tutor</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
