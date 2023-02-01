import React, { Suspense } from 'react'
import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { useTheme } from './theme/useTheme'
import { ClassNames} from './helpers/classNames/classNames'

const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={ClassNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change Theme</button>
            <Link to={ '/' }>Главная</Link>
            <Link to={ '/about' }>О нас</Link>
            <Suspense fallback={ <div>Loading...</div> }>
                <Routes>
                    <Route path={ '/about' } element={ <AboutPageAsync/> }/>
                    <Route path={ '/' } element={ <MainPageAsync/> }/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App