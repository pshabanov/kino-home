import React from 'react'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { ClassNames } from 'shared/lib/classNames/classNames'
import {AppRouter} from "app/providers/router";
import {Navbar} from "widget/Navbar";
import Layout from "shared/ui/Layout/Layout";


const App = () => {

    const { theme } = useTheme()

    return (
        <div className={ClassNames('app', {}, [theme])}>
                <Layout className={ClassNames('Layout')}>
                    <Navbar/>
                </Layout>
            <AppRouter />
            <div className='main-slider'>

            </div>
            <Layout className={ClassNames('Layout')}>
                <div className="wrapper">
                    <main>
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
            </Layout>
        </div>
    )
}

export default App