import {ClassNames} from "shared/lib/classNames/classNames";
import cls from './Layout.module.scss'
import React, {FC} from "react";

interface LayoutProps {
    className?: string,
    children?: React.ReactNode
}

export const Layout:FC<LayoutProps> = (props) => {

    const {className, children} = props
    return (
        <div className={ClassNames(cls.Layout, {}, [className])}>
            {children}
        </div>
    );
};

export default Layout;