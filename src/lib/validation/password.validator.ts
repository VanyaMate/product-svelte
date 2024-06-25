import type { Validator } from '$lib/validation/validator.type';


export const passwordValidator: Validator = function (password: unknown): string {
    if (typeof password !== 'string') {
        return 'Пароль должен быть строкой';
    }

    if (password.length < 6) {
        return 'Длина должна быть больше 6';
    } else if (password.length >= 32) {
        return 'Длина должна быть меньше 32';
    }

    return '';
};