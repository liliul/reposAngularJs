import { useTheme, themes } from "../../contextApi/theme/Theme";

export function ButtonThemeMode() {
    const {setTheme, theme} = useTheme()
    
    return (
        <>
            <button
                className="w-[150px] h-[40px] bg-green-600 rounded-sm m-2"
                onClick={() =>
                setTheme(theme === themes.light ? themes.dark : themes.light)
                }
            >
                {theme === themes.light ? "dark mode" : "light mode"}
            </button>
        </>
    )
}