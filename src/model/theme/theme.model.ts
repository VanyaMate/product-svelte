import { createEffect, createStore } from 'effector';
import {
    setThemeAction,
    ThemeType,
} from '@/action/theme/setTheme.action';
import { LOCAL_STORAGE_THEME } from '../../const/theme/theme.const';


export const setThemeEffect = createEffect(setThemeAction);

export const theme = createStore<ThemeType>(localStorage.getItem(LOCAL_STORAGE_THEME) as ThemeType ?? ThemeType.DARK)
    .on(setThemeEffect, (_, payload) => payload);