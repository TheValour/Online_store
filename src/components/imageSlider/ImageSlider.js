import React, { useState } from 'react';
import styles from './ImageSlider.module.css';

function ImageSlider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        'https://picsum.photos/800/600?random=1',
        'https://picsum.photos/800/600?random=2',
        'https://picsum.photos/800/600?random=3',
        'https://picsum.photos/800/600?random=4',
        'https://picsum.photos/800/600?random=5',
        'https://picsum.photos/800/600?random=6',
    ];

    const handleNext = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
    };

    return (
        <div className={styles.slider}>
            <img className={styles.image} src={images[currentImageIndex]} alt="slider" />
            <div className={styles.buttons}>
                <button className={styles.button} onClick={handlePrev}>Prev</button>
                <button className={styles.button} onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default ImageSlider;
