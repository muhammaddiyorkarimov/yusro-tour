import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './styles/opinion.css';
import images from '../images';
import Title from './../ui/Title';
import Loader from './../ui/Loader';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

function Opinion() {
    // const [opinionsData, setOpinionsData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     async function fetchOpinion() {
    //         try {
    //             const data = await TotalCommand.getOpinions();
    //             setOpinionsData(data);
    //             setLoading(false);
    //         } catch (error) {
    //             setError(error);
    //             setLoading(false);
    //         }
    //     }

    //     fetchOpinion();
    // }, []);

    // const renderStars = (point) => {
    //     const stars = [];
    //     for (let i = 0; i < point; i++) {
    //         stars.push('⭐');
    //     }
    //     return stars.join(' ');
    // };

    return (
        <div className='opinion-section'>
            {/* <div className="container">
                <div className="title-wrapper">
                    <Title img={images.kabah} title="Fikrlar" description="Har yili yuzlab mijozlar biz orqali safarga chiqishmoqda." />
                </div>
                <div className="opinion-carousel">
                    {loading ? (
                        <Loader />
                    ) : error ? (
                        <div className="error">{error}</div>
                    ) : (
                        <Swiper
                            spaceBetween={30}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            {opinionsData.map((opinion, index) => (
                                <SwiperSlide key={index}>
                                    <div className="opinion-slide">
                                        <div className="opinion-image">
                                            <img src={opinion.image} alt={opinion.full_name} />
                                        </div>
                                        <div className="opinion-about">
                                            <span className='point'>{renderStars(opinion.point)}</span>
                                            <p className='theme'>{opinion.theme}</p>
                                            <p className='description'>{opinion.text}</p>
                                            <h3 className='name'>{opinion.full_name}</h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </div> */}
        </div>
    );
}

export default Opinion;
