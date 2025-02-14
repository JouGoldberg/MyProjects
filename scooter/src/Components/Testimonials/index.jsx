import React from 'react';
import styles from './testimonials.module.css';
import { testimonialsProfils } from '../../../Data';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';



const Testimonials = () => {
    const profilsStar = (star) => {
        let starArr = [];
        for (let i = 1; i <= star; i++) {
            starArr.push('0');
        }
        return starArr;
    };

    return (
        <div className={styles.testimonials}>
            <div className="container">
                <h2 className='title'>Testimonials</h2>
                <div className={styles.testimonialsProfils}>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: `.${styles.footLeft}`,
                            nextEl: `.${styles.footRight}`
                        }}
                        loop={true}
                        slidesPerView={1}
                        spaceBetween={25}
                        breakpoints={{
                            1000:{
                                slidesPerView:2
                            },
                            1500:{
                                slidesPerView:3
                            }
                        }}
                    >
                        {
                            testimonialsProfils.map(({ img, name, job, star, desc }, i) => {
                                return (

                                    <SwiperSlide  key={i}>
                                        <div className={styles.testimonialsProfil}>
                                            <div className={styles.profilStar}>
                                                {
                                                    profilsStar(star).map((_, i) => (
                                                        <img loading='lazy' key={i} src="/star.svg" alt="Star" />
                                                    ))
                                                }
                                            </div>
                                            <div className={styles.profilMain}>
                                                <p className={styles.profilDesc}>{desc}</p>
                                                <div className={styles.profilFoot}>
                                                    <img loading='lazy' className={styles.profilImage} src={img} alt="Profil_Image" />
                                                    <div>
                                                        <p className={styles.profilName}>{name}</p>
                                                        <p className={styles.profilJob}>{job}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                </div>

                <div className={styles.testimonialsFoot}>
                    <button className={styles.footLeft}>
                        <FontAwesomeIcon className={styles.faArrow} icon={faArrowLeftLong} />
                    </button>
                    <button className={styles.footRight}>
                        <FontAwesomeIcon className={styles.faArrow} icon={faArrowRightLong} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
