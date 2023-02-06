import React from 'react'
import './styles/index.scss'
import { Link } from 'react-router-dom'
import { useTheme } from 'app/providers/ThemeProvider'
import { ClassNames } from 'shared/lib/classNames/classNames'
import {AppRouter} from "app/providers/router";


const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={ClassNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change Theme</button>
            <Link to={ '/' }>Главная</Link>
            <Link to={ '/about' }>О нас</Link>
            <AppRouter />
        </div>
    )
}

export default App