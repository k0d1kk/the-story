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
          <div className={styles.cards}>
            <div className={styles.card1}>
              <div className={styles.cardBlack}>
                <div className={styles.cardContainer}>
                  <div className={styles.cardWrapper}>
                    <h2>Green Wayne</h2>
                    <div className={styles.cardPrice}>
                      <p>До 10 человек</p>
                      <span>1200₽/2 часа</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card2}>
              <div className={styles.cardBlack}>
                <div className={styles.cardContainer}>
                  <div className={styles.cardWrapper}>
                    <h2>Red Classic</h2>
                    <div className={styles.cardPrice}>
                      <p>До 8 человек</p>
                      <span>1000₽/2 часа</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card3}>
              <div className={styles.cardBlack}>
                <div className={styles.cardContainer}>
                  <div className={styles.cardWrapper}>
                    <h2>Moution</h2>
                    <div className={styles.cardPrice}>
                      <p>До 15 человек</p>
                      <span>1450₽/2 часа</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card4}>
              <div className={styles.cardBlack}>
                <div className={styles.cardContainer}>
                  <div className={styles.cardWrapper}>
                    <h2>White Rose</h2>
                    <div className={styles.cardPrice}>
                      <p>До 2 человек</p>
                      <span>900₽/2 часа</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
