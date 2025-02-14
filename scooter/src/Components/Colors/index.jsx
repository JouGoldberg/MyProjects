import React from 'react'
import styles from './colors.module.css'
import { colorsScooterImg } from '../../../Data'



const Colors = () => {
    return (
        <div className={styles.colors}>
            <div className="container">
                <h2 className='title'>Colors</h2>
                <p className='info'>Checkout our products colors.</p>
            </div>


            <div className={styles.colorsMain}>
                <img loading='lazy' className={styles.colorsMainImg} src="/galleryScooter.png" alt="Scooter" />
            </div>
            <div className="container">
                <div className={styles.colorsCards}>
                    {
                        colorsScooterImg.map((image, i) => {
                            return <div className={styles.colorsCard} key={i}>
                                <img loading='lazy' className={styles.colorsScooterImg} src={image} alt="Scooter" />
                                <p className={styles.colorsScooterNum}>{'0' + (i + 1)}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Colors