import React from 'react';
import Link from 'next/link';

import styles from '../styles/modules/LeftNav.module.css';

import {
  IoLogoGithub,
  IoLogoMedium,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram,
} from 'react-icons/io5';

const LeftNav = () => {
  return (
    <section>
      <div>
        <h2>Socials</h2>
        <small>Where to find me online.</small>
      </div>
      <hr />
      <nav>
        <ul>
          <a href="https://medium.com/@samotleriche">
            <li className={styles.navListItems}>
              <IoLogoMedium className={styles.icons} /> Medium
            </li>
          </a>
          <a href="https://github.com/samotleriche">
            <li className={styles.navListItems}>
              <IoLogoGithub className={styles.icons} /> Github
            </li>
          </a>
          <a href="https://www.linkedin.com/in/tomasleriche/">
            <li className={styles.navListItems}>
              <IoLogoLinkedin className={styles.icons} /> LinkedIn
            </li>
          </a>
          <a href="https://www.instagram.com/tlerichetravels/">
            <li className={styles.navListItems}>
              <IoLogoInstagram className={styles.icons} /> Instagram
            </li>
          </a>
        </ul>
      </nav>
    </section>
  );
};

export default LeftNav;
