import React from 'react'
import styles from './gallery.module.css'

const Gallery = () => {
    return (
        <div id='gallery' className={styles.gallery}>
            <div className="container">
                <h2 className='title'>Gallery</h2>
                <p className='info'>View gallery of our products and make yourself satisfied with our creation.</p>

                <div className={styles.galleryMain}>
                    <div className={styles.galleryCard}>
                        <p className={styles.galleryInfo}>Scooter</p>
                        <img loading='lazy' className={styles.galleryImg} src="/galleryScooter.png" alt="Scooter" />
                    </div>
                    <div className={styles.galleryCard}>
                        <p className={styles.galleryInfo}>Built Quality</p>
                        <img loading='lazy' className={styles.galleryImg} src="/galleryBuilt.png" alt="Built_Quality" />
                    </div>
                    <div className={styles.galleryBtn}>
                        <p>Battery Images</p>
                        <p>Spare Parts Images</p>
                        <p>Charging Cable Images</p>
                    </div>
                    <div className={styles.galleryCard}>
                        <p className={styles.galleryInfo}>Parts</p>
                        <img loading='lazy' className={styles.galleryImg} src="/galleryPart.png" alt="Scooter_Part" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Gallery