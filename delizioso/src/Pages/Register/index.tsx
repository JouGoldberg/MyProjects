import React from 'react'
import styles from './register.module.css'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.login}>
      <div className={styles.insideLogin}>
        <div className={styles.loginLeft}>
          <div className={styles.insideLeft}>
            <h1 className={styles.loginTitle}>Sign up</h1>
            <p className={styles.loginInfo}>Don't have an account? <span onClick={() => navigate('/login')} className={styles.signLink}>Login</span></p>
            <form onSubmit={(e) => e.preventDefault()} className={styles.loginForm}>
              <input className={styles.loginInput} type="email" placeholder='Email address' />
              <br />
              <input className={styles.loginInput} type="password" placeholder='Password' />
              <div className={styles.rememberDiv}>
                <div className={styles.rememberCheckbox}>
                  <input type='checkbox' />
                  <p className={styles.rememberP}>Remember Me</p>
                </div>
                <p className={styles.rememberForget}>Forget Password?</p>
              </div>
              <input className={styles.loginBtn} type="submit" value='Log in' />
              <div className={styles.googleLogin}>
                <img src="googleIcon.svg" alt="Google" />
                <p>Log in with google</p>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.loginRight}>
          <img className={styles.loginRightImg} src="/loginImg1.jpeg" alt="Spaghetti" />
        </div>
      </div>
      <div className={styles.linkDiv}>
        <div className={styles.posRelative}>
          <img src="/logo3.svg" alt="Logo" />
          <Link className={styles.homeLink} to='/'></Link>
        </div>
      </div>
    </div>
  )
}

export default Register