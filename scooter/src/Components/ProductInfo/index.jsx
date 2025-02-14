import React from 'react'
import styles from './productInfo.module.css'
import { productInfo } from '../../../Data'

const ProductInfo = () => {
    return (
        <div id='product' className={styles.product_info}>
            <div className="container">
                <h2 className='title'>Product Information</h2>
                <p className='info'>Our Scooter has following unique design and technology features:</p>

                <div className={styles.main}>
                    <div className={styles.left}>
                        <img loading='lazy' src="/scooterLeft.png" alt="Scooter" />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.rightDiv}>
                            {
                                productInfo.map((e, i) => (
                                    <div className={styles.rightInfoCard} key={i}>
                                        <img loading='lazy' src="/productIcon.svg" alt="Product_Icon" />
                                        <p className={styles.rightInfo}>{e}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo