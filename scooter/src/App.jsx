import React from 'react'
import styles from './app.module.css'
import { scooterInfo } from '../Data'
import Navbar from './Components/Navbar'
import ProductInfo from './Components/ProductInfo'
import Footer from './Components/Footer'
import HighMotor from './Components/HighMotor'
import Accessories from './Components/Accessories'
import Gallery from './Components/Gallery'
import Colors from './Components/Colors'
import Testimonials from './Components/Testimonials'
import Subscribe from './Components/Subscribe'


const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div className={styles.positionRev}>
          <div className="container">
            <div className={styles.header}>
              <div className={styles.left}>
                <h1 className={styles.headH1}>
                  LET'S RIDE
                  <br />
                  <span className={styles.theFuture}>THE FUTURE.</span>
                </h1>

                <hr className={styles.headHr} />

                <p className={styles.info}>Simple and sleek design with users <br /> in mind.</p>

                <div className={styles.leftFoot}>
                  <div className={styles.part}>
                    <p className={styles.buyIcon}>»</p>
                    <p className={styles.buyNow}>Buy now</p>
                  </div>
                  <div className={styles.part}>
                    <p className={styles.watchVideo}>Watch our <br /> video how <br /> it works</p>
                    <img loading='lazy' className={styles.watchVideoImg} src="/workIcon.svg" alt='Icon' />
                  </div>
                </div>

              </div>
              <div className={styles.right}>
                <img loading='lazy' className={styles.rightImg} src="/scooter.png" alt="Scooter" />
              </div>
            </div>
          </div>
          <div className={styles.scooterBg}></div>
        </div>


        <div className="container">
          <div className={styles.scooterInfo_Cards}>
            {
              scooterInfo.map(({ info, number, lbs }, i) => {
                return <div className={styles.card} key={i}>
                  <p className={styles.cardNumber}>{number} <span className={styles.lbs}>{lbs || ''}</span></p>
                  <p className={styles.cardInfo}>{info}</p>
                </div>
              })
            }
          </div>
        </div>

        <ProductInfo />
        <HighMotor />
        <Accessories />
        <Gallery />
        <Colors />
        <Testimonials />
        <Subscribe />


        <Footer />

      </main>
    </div>
  )
}

export default App