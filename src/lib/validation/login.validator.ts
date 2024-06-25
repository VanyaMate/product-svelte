import type { Validator } from '$lib/validation/validator.type';


export const loginValidator: Validator = function (login: unknown): string {
    if (typeof login !== 'string') {
        return 'Логин должен быть строкой';
    }

    if (login.length < 5) {
        return 'Длина должна быть больше 5';
    } else if (login.length >= 20) {
        return 'Длина должна быть меньше 20';
    }

    return '';
};