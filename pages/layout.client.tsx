import React, { useState } from 'react';
import styles from './stylesheet.module.css';
import '../styles/global.css';
import myImage1 from './test1.png';
import myImage2 from './test2.png';
import myImage3 from './test3.png';
import myImage4 from './test4.png';
import myImage5 from './test5.png';
import title from './title.png';
import header from './header.png';

const Page: React.FC = () => {
  const initialPosition = { x: 2100, y: 250 };
  const [imagePositions, setImagePositions] = useState({
    image1: initialPosition,
    image2: initialPosition,
    image3: initialPosition,
    image4: initialPosition,
    image5: initialPosition,
  });
  const [activeImage, setActiveImage] = useState(null);

  const handleContainerClick = (imageKey: string, newPosition: { x: number, y: number }) => {
    setImagePositions(prevPositions => ({
      ...prevPositions,
      [activeImage as unknown as string]: initialPosition, // reset the position of the active image
      [imageKey]: newPosition, // set the new position for the clicked image
    }));
    setActiveImage(imageKey as string | null); // set the new active image
  };

  return (
    <body>
      <img className={`${styles.image} ${styles.image1}`} src={myImage1.src} alt="description" style={{ position: 'absolute', left: `${imagePositions.image1.x}px`, top: `${imagePositions.image1.y}px`, transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }} />
      <img className={`${styles.image} ${styles.image2}`} src={myImage2.src} alt="description" style={{ position: 'absolute', left: `${imagePositions.image2.x}px`, top: `${imagePositions.image2.y}px`, transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }} />
      <img className={`${styles.image} ${styles.image3}`} src={myImage3.src} alt="description" style={{ position: 'absolute', left: `${imagePositions.image3.x}px`, top: `${imagePositions.image3.y}px`, transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }} />
      <img className={`${styles.image} ${styles.image4}`} src={myImage4.src} alt="description" style={{ position: 'absolute', left: `${imagePositions.image4.x}px`, top: `${imagePositions.image4.y}px`, transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }} />
      <img className={`${styles.image} ${styles.image5}`} src={myImage5.src} alt="description" style={{ position: 'absolute', left: `${imagePositions.image5.x}px`, top: `${imagePositions.image5.y}px`, transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }} />
      <div className={styles.box}>
        <div className={`${styles.container} ${styles.examples}`} onClick={() => handleContainerClick('image1', { x: 1000, y: 250 })}>
          <div className={styles.containername}>CALENDAR</div>
        </div>

        <div className={`${styles.container} ${styles.features}`} onClick={() => handleContainerClick('image2', { x: 1000, y: 250 })}>
          <div className={styles.containername}>CLASSES</div>
        </div>

        <div className={`${styles.container} ${styles.pricing}`} onClick={() => handleContainerClick('image3', { x: 1000, y: 250 })}>
          <div className={styles.containername}>GRADES</div>
        </div>

        <div className={`${styles.container} ${styles.contact}`} onClick={() => handleContainerClick('image4', { x: 1000, y: 250 })}>
          <div className={styles.containername}>ADMIN</div>
        </div>

        <div className={`${styles.container} ${styles.other}`} onClick={() => handleContainerClick('image5', { x: 1000, y: 250 })}>
          <div className={styles.containername}>OTHER</div>
        </div>
      </div>
      <div className={styles.gynged}> GYNGED</div>
      <img className={`${styles.title} ${styles.title}`} src={title.src} alt="Title" />
      <img className={`${styles.header} ${styles.header}`} src={header.src} alt="header" />

    </body>
  );
};

export default Page;