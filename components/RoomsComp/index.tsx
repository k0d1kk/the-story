import React from 'react';
import styles from './RoomsComp.module.scss';

export default function RoomsComp() {
  return (
    <section className={styles.section}>
      <img src="foot_top2.png" className={styles.img} alt="" />
      <div className={styles.roomscompContainer}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <div className={styles.line} />
            <h2>Топ залов</h2>
            <div className={styles.line} />
          </div>
          <div className={styles.card1}>
            <div className={styles.cardBlack}>
              <div className={styles.cardContainer}>
                <div className={styles.cardWrapper}>
                  <h2>Зал 1</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
