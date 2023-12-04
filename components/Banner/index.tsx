import React from 'react';
import styles from './Banner.module.scss';

export default function Banner() {
  return (
    <section className={styles.section}>
      <img src="/foot_top2.png" alt="" className={styles.photo} />
      <div className={styles.blure}>
        <div className={styles.bannerContainer}>
          <div className={styles.wrapper}>
            <h2>Хочешь праздновать у нас ?</h2>
            <h1>Скидка -25% к общей сумме празднования у нас!</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
