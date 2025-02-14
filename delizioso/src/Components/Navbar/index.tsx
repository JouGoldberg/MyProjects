import React from 'react'
import styles from './navbar.module.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className="container">
                <div className={styles.insideNavbar}>
                    <div className={styles.logo}>
                        <img loading='lazy' src='/logo.svg' alt="Logo" />
                        <Link className={styles.logoLink} to='/'></Link>
                    </div>
                    <div className={styles.navLinks}>
                        <NavLink className={({isActive}) => `${isActive ? styles.active : ''} ${styles.navLink}`} to='/'>Home</NavLink>
                        <NavLink className={({isActive}) => `${isActive ? styles.active : ''} ${styles.navLink}`} to='/menu'>Menu</NavLink>
                        <NavLink className={({isActive}) => `${isActive ? styles.active : ''} ${styles.navLink}`} to='/about'>About us</NavLink>
                        <NavLink className={({isActive}) => `${isActive ? styles.active : ''} ${styles.navLink}`} to='/order'>Order online</NavLink>
                        <NavLink className={({isActive}) => `${isActive ? styles.active : ''} ${styles.navLink}`} to='/reservation'>Reservation</NavLink>
                        <NavLink className={({isActive}) => `${isActive ? styles.active : ''} ${styles.navLink}`} to='/contact'>Contact us</NavLink>
                    </div>
                    <div className={styles.navEnd}>
                        <img loading='lazy' className={styles.basketImg} src='/basket.svg' alt="Basket_Image" />
                        <Link className={styles.loginLink} to='/login'>Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar