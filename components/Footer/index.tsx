import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <section className={styles.section}>
      <div className={styles.footerContainer}>
        <div className={styles.wrapper}>
          <p>© 2022 - 2026 The Story. Все права защищены</p>
          <p>
            Разработка сайта от <a href="https://www.st-it.pro">St-It.Pro</a>
          </p>
        </div>
      </div>
    </section>
  );
}
