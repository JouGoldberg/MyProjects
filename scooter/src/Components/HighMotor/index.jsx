import React from 'react'
import styles from './highMotor.module.css'

const HighMotor = () => {
    return (
        <div className={styles.high_Motor}>
            <div className="container">
                <h2 className='title'>High Efficiency Motor</h2>
                <p className='info'>More torque for powerful riding with 22% maximum hill climbing capability.</p>
                <img loading='lazy' className={styles.motorImg} src="/scooterMotor.jpeg" alt="Scooter_Motor" />
            </div>
        </div>
    )
}

export default HighMotor