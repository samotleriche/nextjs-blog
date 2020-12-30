import React from 'react';

import styles from '../styles/modules/Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.profileImage}>

      </div>
      <h2>Tomas Leriche</h2>
    </header>
  )
}

export default Header;