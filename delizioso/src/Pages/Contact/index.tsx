import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div>
      <div className="container">
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.info}>We love hearing from our customers. Feel free to share your experience or ask any <br /> questions you may have.</p>
        <form className={styles.contactForm}>
          <input className={styles.formInput} type="text" placeholder='First name' />
          <input className={styles.formInput} type="text" placeholder='Last name' />
          <input className={styles.formInput} type="text" placeholder='Email address' />
          <input className={styles.formInput} type="text" placeholder='Subject' />
          <textarea placeholder='Message'></textarea>
        </form>
        <div className={styles.formSubmitDiv}>
          <button className={styles.formBtn}>Submit</button>
        </div>
      </div>
      <div className={styles.contactFoot}>
        <img className={styles.mapImg} src="/map.png" alt="Map" />
        <img className={styles.mapLocation} src="/mapLocation.svg" alt="Location" />
      </div>
    </div>
  )
}

export default Contact