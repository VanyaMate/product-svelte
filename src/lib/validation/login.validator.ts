import type { Validator } from '$lib/validation/validator.type';
import { lengthValidator } from '$lib/validation/length.validator';


export const loginValidator: Validator = function (login: unknown): string {
    return lengthValidator(5, 20)(login);
};