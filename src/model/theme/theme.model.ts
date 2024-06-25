import { createEffect, createStore } from 'effector';
import {
    setThemeAction,
    ThemeType,
} from '@/action/theme/setTheme.action';
import { getThemeAction } from '@/action/theme/getTheme.action';


export const setThemeEffect = createEffect(setThemeAction);

export const theme = createStore<ThemeType>(getThemeAction())
    .on(setThemeEffect, (_, payload) => payload);