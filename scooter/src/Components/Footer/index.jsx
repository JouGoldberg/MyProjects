import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.insideFooter}>
          <div className={styles.left}>
            <img loading='lazy' className={styles.footerLeftImg} src="scooter.png" alt="Scooter" />
          </div>
          <div className={styles.right}>
            <div className={styles.insideRight}>
              <div>
                <h4>About</h4>
                <p>Company</p>
                <p>Teams</p>
                <p>Profile</p>
                <p>Careers</p>
              </div>
              <div>
                <h4>Resources</h4>
                <p>Contact</p>
                <p>Application</p>
                <p>FQA Features</p>
              </div>
              <div>
                <h4>Legals</h4>
                <p>Copyright Privacy</p>
                <p>Policy Disclaimer</p>
                <p>Terms</p>
                <div className={styles.socialNet}>
                  <img loading='lazy' src="/facebook.svg" alt="Facebook" />
                  <img loading='lazy' src="/twitter.svg" alt="Twitter" />
                  <img loading='lazy' src="/instagram.svg" alt="Instagram" />
                </div>
              </div>
            </div>
          </div>
      </div>
      <p className={styles.footP}>© Copyright 2021. All rights reserved.</p>
    </div>
  )
}

export default Footer