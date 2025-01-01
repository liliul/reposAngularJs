import { useTheme } from "../../contextApi/theme/Theme";

export function ThemesModeButton({ titulo, currentTheme }) {
    const { setTheme } = useTheme()

    function handleTheme() {
        setTheme(currentTheme)
    }

    return (
        <>
            <button
                className="w-[150px] h-[40px] bg-green-600 rounded-sm m-2"
                onClick={handleTheme}
            >
                { titulo }
            </button>
        </>
    )
}
