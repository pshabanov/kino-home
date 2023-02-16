import {ClassNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {useTheme} from "app/providers/ThemeProvider";

interface ThemeSwitcherProps {
    className?: string
}


export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()


    return (
        <button
            className={ClassNames(cls.ThemeSwitcher, {}, [])}
            onClick={toggleTheme}
        >
            Toggle
        </button>
    );
};

export default ThemeSwitcher;