import { useTheme } from "../../contextApi/theme/Theme"

export function ThemeMode() {
    const {theme} = useTheme()
    console.log(theme);
    
    return (
        <>
            <p className="text-yellow-600">Qual tema esta sendo usado: {theme.colors.background} </p>
        </>
    )
}