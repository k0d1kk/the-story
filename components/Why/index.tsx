import React from 'react';
import styles from './Why.module.scss';

export default function Why() {
  return (
    <section className={styles.section}>
      <img src="foot_top2.png" className={styles.img} alt="" />
      <div className={styles.black}>
        <div className={styles.whyContainer}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>
              Почему <span>АнтиКинотеатр?</span>
            </h2>
            <div className={styles.video}>
              <iframe
                width="0"
                height="0"
                src="https://www.youtube-nocookie.com/embed/vTFOIb6zAoI?si=JTMQhEx3fzgDglLI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.pluses}>
              <div className={styles.card}>
                <img src="pluses_1.png" alt="" />
                <p>Целый зал только для тебя</p>
              </div>
              <div className={styles.line}>
                <div className={styles.card}>
                  <img src="pluses_2.png" alt="" />
                  <p>Игры на Xbox и PS4</p>
                </div>
                <div className={styles.card}>
                  <img src="pluses_3.png" alt="" />
                  <p>Выпей у нас или забери с собой</p>
                </div>
              </div>
              <div className={styles.line}>
                <div className={styles.card}>
                  <img src="pluses_4.png" alt="" />
                  <p>Прямые трансляции спортивных матчей</p>
                </div>
                <div className={styles.card}>
                  <img src="pluses_5.png" alt="" />
                  <p>Твои вечеринки любого формата</p>
                </div>
              </div>
            </div>
            <a className={styles.button} href="/">
              Хочу узнать больше
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
