import React, { useRef, useState } from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1000) {
      setIsOpen(false)
    }
  })

  return (
    <nav className={styles.nav}>
      <div onClick={() => setIsOpen(false)} className={isOpen ? styles.divOpenNav : styles.divCloseNav}></div>
      <div className="container">
        <div className={styles.navbar}>
          <img loading='lazy' src='/logo.svg' alt='Logo' />
          <div className={styles.navLinks}>
            <Link to='product' smooth='true' duration={700} className={styles.link}>PRODUCT</Link>
            <Link to='gallery' smooth='true' duration={800} className={styles.link}>GALLERY</Link>
            <Link to='contact' smooth='true' duration={900} className={styles.link}>CONTACT</Link>
          </div>
          <div className={styles.account}>
            <button className={styles.loginBtn}>LOG IN</button>
            <button className={styles.signBtn}>SIGN UP</button>
          </div>
          <FontAwesomeIcon onClick={() => setIsOpen(pre => !pre)} className={styles.barsMenu} icon={faBars} size='xl' />
        </div>
      </div>
      <div className={`${styles.mediaNav} ${isOpen ? styles.openNav : styles.mediaNavClose}`}>
        <div className={styles.insideMediaNav}>
          <div className={styles.mediaNavLinks}>
            <div className={styles.headMediaNav}>
              <FontAwesomeIcon onClick={() => setIsOpen(pre => !pre)} className={styles.barsMenu} icon={faBars} size='xl' />
              <img loading='lazy' className={styles.headLogo} src='/logo.svg' alt='Logo' />
            </div>
            <div className={styles.mediaLink}>
              <Link className={styles.positionLink} to='product' smooth='true' duration={700}></Link>
              <img loading='lazy' src="/product.svg" alt="Product_Icon" />
              <p>PRODUCT</p>
            </div>
            <div className={styles.mediaLink}>
              <Link className={styles.positionLink} to='gallery' smooth='true' duration={800}></Link>
              <img loading='lazy' src="/gallery.svg" alt="Gallery_Icon" />
              <p>GALLERY</p>
            </div>
            <div className={styles.mediaLink}>
              <Link className={styles.positionLink} to='contact' smooth='true' duration={900}></Link>
              <img loading='lazy' src="/contact.svg" alt="Contact_Icon" />
              <p>CONTACT</p>
            </div>
          </div>
          <div className={styles.mediaAccount}>
            <button className={styles.loginBtn}>LOG IN</button>
            <button className={styles.signBtn}>SIGN UP</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar