import { LOCAL_STORAGE_THEME } from '@/const/theme/theme.const';


export enum ThemeType {
    DARK  = 'dark',
    LIGHT = 'light'
}

export const setThemeAction = function (theme: ThemeType) {
    localStorage.setItem(LOCAL_STORAGE_THEME, theme);
    return theme;
};