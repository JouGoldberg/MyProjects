import React from 'react'
import styles from './home.module.css'
import PopularMenu from '../../Components/PopularMenu'


const Home = () => {
  return (
    <div className={styles.home}>
      <div className="container">
        <div className={styles.restaurant}>
          <div className={styles.restaurantLeft}>
            <p className={styles.restaurantHeading}>Restaurant</p>
            <h2 className={styles.restaurantTitle}>Italian <br /> Cuisine</h2>
            <p className={styles.restaurantInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Sodales senectus dictum arcu sit tristique <br /> donec eget.</p>
            <div className={styles.restaurantButtons}>
              <button className={styles.restaurantOrder}>Order now</button>
              <button className={styles.restaurantReservation}>Reservation</button>
            </div>
          </div>
          <div className={styles.restaurantRight}>
            <img loading='lazy' className={styles.vegetable1} src='/restaurantVegetable.png' alt="Vegetable" />
            <img loading='lazy' className={styles.vegetable2} src='/restaurantVegetable.png' alt="Vegetable" />
            <img loading='lazy' className={styles.restaurantSpaghettiImg} src='/restaurantSpaghetti.png' alt="Spaghetti" />
          </div>
        </div>
      </div>

      <div className={styles.welcomeDelizioso}>
        <div className="container">
          <div className={styles.insideWelcome}>
            <div className={styles.welcomeLeft}>
              <img loading='lazy' className={styles.leaf1} src='/leaf1.svg' alt="Leaf" />
              <img loading='lazy' className={styles.leaf2} src='/leaf1.svg' alt="Leaf" />
              <img loading='lazy' className={styles.saladImg} src='/salad.png' alt="Salad" />
            </div>
            <div className={styles.welcomeRight}>
              <h2 className={styles.welcomeTitle}>Welcome to <br /> <span className={styles.orange}>delizioso</span></h2>
              <p className={styles.welcomeInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
              <button className={styles.welcomeBtn}>See our menu</button>
            </div>
          </div>
        </div>
      </div>

      <PopularMenu title="Our popular menu"/>

    </div>
  )
}

export default Home