import React, { useRef } from 'react'
import styles from './subscribe.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const Subcribe = () => {
    let inpRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        inpRef.current.value = ''
    }

    return (
        <div id='contact' className={styles.subscribe}>
            <div className="container">
                <h2 className='title'>Subscribe To Newsletter</h2>
                <p className='info'>Subscribe to our newsletter to get amazing offers in future.</p>

                <div className="container">
                    <form onSubmit={handleSubmit} className={styles.subscribeForm}>
                        <input ref={inpRef} type="email" placeholder='Enter your email' />
                        <input type="submit" value='Get Start' />
                        <button className={styles.submitBtn} type='submit'>
                            <FontAwesomeIcon className={styles.faPaper} icon={faPaperPlane} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Subcribe