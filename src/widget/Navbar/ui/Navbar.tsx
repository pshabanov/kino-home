import React from 'react';
import {ClassNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import AppLink from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}


export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={ClassNames(cls.Navbar, {}, [className])}>
            <AppLink to={ '/' }>Главная</AppLink>
            <AppLink to={ '/about' }>О нас</AppLink>
        </div>
    );
};

export default Navbar;