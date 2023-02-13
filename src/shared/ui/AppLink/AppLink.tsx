import {ClassNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

interface AppLinkProps extends LinkProps{
    className?: string
}


export const AppLink:FC<AppLinkProps> = (props) => {

    const { to, className, children, ...otherProps } = props

    return (
        <Link
            to={to}
            className={ClassNames(cls.AppLink, {}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;