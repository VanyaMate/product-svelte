import type { Validator } from '$lib/validation/validator.type';
import { lengthValidator } from '$lib/validation/length.validator';


export const passwordValidator: Validator = function (password: unknown): string {
    return lengthValidator(6, 32)(password);
};