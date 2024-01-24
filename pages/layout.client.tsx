
import React, { useState } from 'react';
import styles from './stylesheet.module.css';
import '../styles/global.css';
import myImage1 from './test1.png';
import myImage2 from './test2.png';
import myImage3 from './test3.png';
import myImage4 from './test4.png';
import myImage5 from './test5.png';

const Page: React.FC = () => {
  const [imagePosition1, setImagePosition1] = useState({ x: 2100, y: 500 });
  const [imagePosition2, setImagePosition2] = useState({ x: 2100, y: 500 });
  const [imagePosition3, setImagePosition3] = useState({ x: 2100, y: 500 });
  const [imagePosition4, setImagePosition4] = useState({ x: 2100, y: 500 });
  const [imagePosition5, setImagePosition5] = useState({ x: 2100, y: 500 });

  const handleContainerClick1 = () => {
    setImagePosition1({ x: 1000, y: 500 });
  };

  const handleContainerClick2 = () => {
    setImagePosition2({ x: 1000, y: 500 });
  };

  const handleContainerClick3 = () => {
    setImagePosition3({ x: 1000, y: 500 });
  };

  const handleContainerClick4 = () => {
    setImagePosition4({ x: 1000, y: 500 });
  };

  const handleContainerClick5 = () => {
    setImagePosition5({ x: 1000, y: 500 });
  };

  return (
    <body>
      <img className={styles.image} src={myImage1.src} alt="description" style={{ position: 'absolute', left: `${imagePosition1.x}px`, top: `${imagePosition1.y}px`, transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }} />
      <img className={styles.image} src={myImage2.src} alt="description" style={{ position: 'absolute', left: `${imagePosition2.x}px`, top: `${imagePosition2.y}px`, transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }} />
      <img className={styles.image} src={myImage3.src} alt="description" style={{ position: 'absolute', left: `${imagePosition3.x}px`, top: `${imagePosition3.y}px`, transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }} />
      <img className={styles.image} src={myImage4.src} alt="description" style={{ position: 'absolute', left: `${imagePosition4.x}px`, top: `${imagePosition4.y}px`, transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }} />
      <img className={styles.image} src={myImage5.src} alt="description" style={{ position: 'absolute', left: `${imagePosition5.x}px`, top: `${imagePosition5.y}px`, transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }} />


<div className={styles.box}>
    <div className={`${styles.container} ${styles.examples}`} onClick={handleContainerClick1}>
      <div className={styles.containername}>CALENDAR</div>
    </div>

    <div className={`${styles.container} ${styles.features}`} onClick={handleContainerClick2}>
      <div className={styles.containername}>CLASSES</div>
    </div>

    <div className={`${styles.container} ${styles.pricing}`} onClick={handleContainerClick3}>
      <div className={styles.containername}>GRADES</div>
    </div>

    <div className={`${styles.container} ${styles.contact}`} onClick={handleContainerClick4}>
      <div className={styles.containername}>ADMIN</div>
    </div>

    <div className={`${styles.container} ${styles.other}`} onClick={handleContainerClick5}>
      <div className={styles.containername}>OTHER</div>
    </div>
    </div>
    
    <div className={styles.gynged}> GYNGED</div>
    </body>
  );
};

export default Page;
