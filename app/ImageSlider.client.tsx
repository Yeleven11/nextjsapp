// ImageSlider.client.tsx
import React, { useState } from 'react';
import styles from './stylesheet.module.css';

const ImageSlider: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleClick = (imagePath: string) => {
        setSelectedImage(imagePath);
    };

    return (
        <div className={styles.box}>
            <div className={`${styles.container} ${styles.examples}`} onClick={() => handleClick('test.png')}>
                <div className={styles.containername}>CALENDAR</div>
            </div>

            <div className={`${styles.container} ${styles.features}`} onClick={() => handleClick('test1.png')}>
                <div className={styles.containername}>CLASSES</div>
            </div>

            <div className={`${styles.container} ${styles.pricing}`} onClick={() => handleClick('test2.png')}>
                <div className={styles.containername}>GRADES</div>
            </div>

            <div className={`${styles.container} ${styles.contact}`} onClick={() => handleClick('test3.png')}>
                <div className={styles.containername}>ADMIN</div>
            </div>

            <div className={`${styles.container} ${styles.other}`} onClick={() => handleClick('test4.png')}>
                <div className={styles.containername}>OTHER</div>
            </div>
            {selectedImage && <img src={selectedImage} className={styles.slideInImage} />}
        </div>
    );
};

export default ImageSlider;