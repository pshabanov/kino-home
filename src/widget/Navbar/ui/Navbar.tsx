import React from 'react';
import {ClassNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import AppLink from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widget/ThemeSwitcher";
import UserIcon from "shared/assets/icons/user.svg"
import {Theme, useTheme} from "app/providers/ThemeProvider";
import Button, {ThemeButton} from "shared/ui/Button/Button";

interface NavbarProps {
    className?: string
}


export const Navbar = ({className}: NavbarProps) => {
    const { theme } = useTheme()
    return (
        <div className={ClassNames(cls.Navbar, {}, [className])}>
            <header className={ClassNames(cls.header, {},[])}>
                <div className="header-nav">
                    <div className="header-logo">
                        <span className="logo-img">
                            <AppLink to={ '/' } className={ClassNames('__not-ignite', {}, [])}>KinoHome</AppLink>
                        </span>
                    </div>
                    <ul className="header-nav__list">
                        <AppLink to={ '/about' }>Мои фильмы</AppLink>
                        <AppLink to={ '/about' }>Новые</AppLink>
                        <AppLink to={ '/about' }>Каталог</AppLink>
                        <AppLink to={ '/about' }>Сериалы</AppLink>
                        <AppLink to={ '/about' }>Мульфильмы</AppLink>
                    </ul>
                </div>
                <div className="header-actions">
                    <div className='search-wrapper'>
                        <input className='search' type="text" placeholder='Фильмы, сериалы, актеры'/>
                    </div>
                    <div className='subscription'>Бесплатная подписка на 30 дней</div>
                    <ThemeSwitcher />
                    <div className={cls.userIcon}>
                        <Button
                            theme={ThemeButton.CLEAR}
                            className={ClassNames(cls.ThemeSwitcher, {}, [])}
                        >
                            {theme === Theme.DARK ? <UserIcon className="__dark"/> : <UserIcon className="__light" />}
                        </Button>

                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;