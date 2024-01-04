import React from 'react';
import styles from './stylesheet.module.css';
import '../styles/global.css';



const Page: React.FC = () => (
  <body>



    <div className={styles.box}>
      <div className={`${styles.container} ${styles.examples}`}>
        <div className={styles.containername}>CALENDAR</div>
      </div>

      <div className={`${styles.container} ${styles.features}`}>
        <div className={styles.containername}>CLASSES</div>
      </div>

      <div className={`${styles.container} ${styles.pricing}`}>
        <div className={styles.containername}>GRADES</div>
      </div>

      <div className={`${styles.container} ${styles.contact}`}>
        <div className={styles.containername}>ADMIN</div>
      </div>
      <div className={`${styles.container} ${styles.other}`}>
        <div className={styles.containername}>OTHER</div>
      </div>

     
    </div>
    <div className={styles.gynged}> GYNGED</div>

  </body>
);

export default Page;

