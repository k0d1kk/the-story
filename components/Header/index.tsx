import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <nav className={styles.nav}>
      <img src="/foot_top2.png" alt="" className={styles.photo} />
      <div className={styles.headerContainer}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <img
              src="https://antikinoteatr.com/sites/default/files/bizonoff_site_info/logo_web_2.png"
              alt=""
            />
          </div>
          <ul className={styles.ul}>
            <a href="">
              <li>Залы</li>
            </a>
            <a href="">
              <li>Меню</li>
            </a>
            <a href="">
              <li>Правила</li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}
