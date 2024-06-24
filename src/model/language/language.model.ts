import { createEffect, createStore } from 'effector';
import { loadLanguageSchema } from '@/action/i18n/loadLanguageSchema';
import { toggleLanguage } from '@/action/i18n/toggleLanguage';


export const loadSchemaEffect     = createEffect(loadLanguageSchema);
export const toggleLanguageEffect = createEffect(toggleLanguage);


export const language       = createStore('ru')
    .on(toggleLanguageEffect, (_, lang) => lang);
export const languageSchema = createStore(null)
    .on(loadSchemaEffect.done, (_, payload) => payload.result);