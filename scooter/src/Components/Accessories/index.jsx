import React, { useEffect, useState } from 'react'
import styles from './accessories.module.css'
import { accessoriesInfo, shoppingRack } from '../../../Data'

const Accessories = () => {

    const [cont, setCont] = useState(window.innerWidth < 750);
    
    useEffect(() => {
        const handleResize = () => {
            setCont(window.innerWidth < 750);
        };
    
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    


    return (
        <div className={styles.accessories}>
            <div className="container">
                <h2 className="title">Multiple Accessories</h2>
                <p className="info">There are multiple modes for the scooter for your multiple needs.</p>

                <div className={styles.main}>
                    <div className={styles.left}>
                        <h3 className={styles.cardsTitle}>Golf Bag Rock</h3>

                        <div className={styles.infoCards}>
                            {
                                accessoriesInfo.map((e, i) => {
                                    return <div className={styles.infoCard} key={i}>
                                        <img src="/productIcon.svg" alt="Product_Icon" />
                                        <p className={styles.infoP}>{e}</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    <div className={styles.right}>
                        <img loading='lazy' className={styles.scooterImg} src="/accessoriesScooter.png" alt="Scooter_Accessories" />
                        <img loading='lazy' className={`${styles.scooterImg} ${styles.scooter2}`} src="/accessoriesScooter2.jpeg" alt="Scooter" />
                    </div>
                </div>
            </div>
            <div className={styles.main2}>
                <div className={styles.main2Left}>
                    <img loading='lazy' className={styles.greenScooter} src="/greenScooter.jpeg" alt="Scooter" />
                    <img loading='lazy' className={styles.redScooter} src="/accessoriesRed.png" alt="Accessories" />
                </div>
                <div className={styles.main2Right}>
                    <div className={cont ? 'container' : ''}>
                        <h3 className={styles.cardsTitle}>Shopping Rack</h3>

                        <div className={styles.infoCards}>
                            {
                                shoppingRack.map((e, i) => {
                                    return <div className={styles.infoCard} key={i}>
                                        <img loading='lazy' src="/productIcon.svg" alt="Product_Icon" />
                                        <p className={styles.infoP}>{e}</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <p className={styles.main2Foot}>More Accessories Coming Soon</p>
        </div>
    )
}

export default Accessories