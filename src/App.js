import './App.css';
import logo from './assets/img/logo.svg'
import slide1 from './assets/img/banners/slide1.jpg'
import slide2 from './assets/img/banners/slide2.jpg'
import slide3 from './assets/img/banners/slide3.jpg'
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {Navigation} from "swiper";

function App() {
    return (
        <>
            <div className="wrapper">
                <header className="header">
                    <div className="header-nav">
                        <div className="header-logo">
                            <img src={logo} alt=""/>
                            <span className="logo-img"> KinoHome</span>
                        </div>
                        <ul className="header-nav__list">
                            <li>Мои фильмы</li>
                            <li>Новые</li>
                            <li>Каталог</li>
                            <li>Сериалы</li>
                            <li>Мульфильмы</li>
                        </ul>
                    </div>
                    <div className="header-actions">
                        <div className='search-wrapper'>
                            <input className='search' type="text" placeholder='Фильмы, сериалы, актеры'/>
                        </div>
                        <div className='subscription'>Бесплатная подписка на 30 дней</div>
                        <div className='userIcon'>
                            <svg height='48px' width='48px' viewBox="0 0 24 24" fill='none'
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.14 21.62C17.26 21.88 16.22 22 15 22H8.99998C7.77998 22 6.73999 21.88 5.85999 21.62C6.07999 19.02 8.74998 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62Z"
                                />
                                <path
                                    d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z"
                                />
                                <path
                                    d="M15.58 10.58C15.58 12.56 13.98 14.17 12 14.17C10.02 14.17 8.42004 12.56 8.42004 10.58C8.42004 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58Z"
                                />
                            </svg>
                        </div>
                    </div>
                </header>
            </div>
            <div className='main-slider'>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    loop={true}
                    slidesPerView={1.2}
                    spaceBetween={30}
                    centeredSlides={true}
                >
                    <SwiperSlide>
                        <img src={slide1} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt=""/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="wrapper">
                <main>
                    Основной контент
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </main>
                <footer>
                    <div className="footer__top">
                        <div className="footer__list footer__about-us">
                            <h2>О нас</h2>
                            <ul>
                                <li>О компании</li>
                                <li>Вакансии</li>
                                <li>Программа бета-тестирования</li>
                                <li>Информация для партнеров</li>
                                <li>Размещение рекламы</li>
                                <li>Пользовательское соглашение</li>
                                <li>Политика конфиденциальности</li>
                                <li>Горячая линия</li>
                            </ul>
                        </div>
                        <div className="footer__list footer__sections">
                            <h2>Разделы</h2>
                            <ul>
                                <li>Избранное</li>
                                <li>Что нового</li>
                                <li>Фильмы</li>
                                <li>Сериалы</li>
                                <li>Мультфильмы</li>
                                <li>ТВ-каналы</li>
                                <li>Что посмотреть</li>
                                <li>Активация сертификата</li>
                            </ul>
                        </div>
                        <div className="footer__list footer__support">
                            <h2>Служба поддержки</h2>
                            <p>Мы всегда готовы вам помочь.<br/> Наши операторы онлайн 24/7</p>
                            <div className="chat">
                                Написать в чат
                            </div>
                            <div>
                                <ul>
                                    <li>Иконка-Почты</li>
                                    <li>Иконка-Телефон</li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__list footer__subscribe">
                            <div className='subscribe-box'></div>
                            <p>
                                Смотрите фильмы, сериалы и мультфильмы без рекламы
                            </p>
                        </div>
                    </div>
                    <div className="footer-social">

                    </div>
                    <div className="footer__copy-right">
                        StepWagon & Cruiser® and related service marks are the property of Home Box Office, Inc<br/>
                        © 2023 «KinoHome»
                    </div>
                </footer>
            </div>
        </>
    );
}

export default App;
