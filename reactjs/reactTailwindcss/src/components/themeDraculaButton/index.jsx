import { useTheme, themes } from "../../contextApi/theme/Theme";

export function ThemeDraculaButton() {
    const {setTheme, theme} = useTheme()

    return (
        <>
            <button
                className="w-[150px] h-[40px] bg-green-600 rounded-sm m-2"
                onClick={() =>
                setTheme(theme === themes.light || theme === themes.dark ? themes.dracula : themes.light)
                }
            >
                {theme === themes.dracula ? "dracula mode" : "sem mode"}
            </button>
        </>
    )
}
