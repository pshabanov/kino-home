import React from 'react'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { ClassNames } from 'shared/lib/classNames/classNames'
import {AppRouter} from "app/providers/router";
import {Navbar} from "widget/Navbar";


const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={ClassNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter />
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    )
}

export default App