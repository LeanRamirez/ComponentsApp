import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { ThemeColors, darkColors, lightColors } from '../../config/theme/theme';
import { Appearance, AppState, useColorScheme } from "react-native";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";


type ThemeColor = 'Light' | 'Dark';

interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;
    isDark: boolean;

    setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);


export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const colorScheme = useColorScheme();
    const [currentTheme, setCurrentTheme] = useState<ThemeColor>('Light')
    const isDark = currentTheme === 'Dark';
    const colors = isDark ? darkColors : lightColors;

    useEffect(() => {
        if (colorScheme === 'dark') {
            setCurrentTheme('Dark')
        } else {
            setCurrentTheme('Light')
        }
    }, [colorScheme])


    //Otra forma de cambiar el modo dark o light de la aplicacion
    // useEffect(() => {
    //     const subscription = AppState.addEventListener('change', nextAppState => {
    //         const colorScheme = Appearance.getColorScheme();
    //         setCurrentTheme(colorScheme === 'dark' ? 'Dark' : 'Light')
    //     });

    //     return () => {
    //         subscription.remove();
    //     };
    // }, []);


    const setTheme = (theme: ThemeColor) => {
        setCurrentTheme(theme)
    }


    return (
        <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
            <ThemeContext.Provider
                value={{
                    currentTheme: currentTheme,
                    isDark: isDark,
                    colors: colors,
                    setTheme: setTheme
                }}
            >
                {children}
            </ThemeContext.Provider>
        </NavigationContainer>
    )
}


