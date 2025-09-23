import { useTheme } from "../app/contexts/ThemeContext";

export const ThemeSwitch = () => {
    const themeCtx = useTheme();

    const handleThemeToggle = () => {
        if(themeCtx) {
            themeCtx.setTheme(themeCtx.theme === 'dark' ? 'light' : 'dark');
        }
    }

    return (
        <div
            className={`w-40 m-auto mt-5 fixed top-0 left-0 right-0 p-3 text-center cursor-pointer border px-4 py-3 rounded-md
                    ${themeCtx?.theme === 'light' ?
                        'bg-black text-white' :
                        'bg-white text-black'
                    }
                `} 
            onClick={handleThemeToggle}
        >
            {themeCtx?.theme === 'dark' && 'Mudar para Light'}
            {themeCtx?.theme === 'light' && 'Mudar para Dark'}
        </div>
    );
}