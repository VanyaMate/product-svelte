import { LOCAL_STORAGE_THEME } from '@/const/theme/theme.const';
import { ThemeType } from '@/action/theme/setTheme.action';


export const getThemeAction = function () {
    return localStorage.getItem(LOCAL_STORAGE_THEME) as ThemeType ?? ThemeType.DARK;
};