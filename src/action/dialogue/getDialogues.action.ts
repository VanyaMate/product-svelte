import { createRequest } from '$lib/fetch/createRequest';
import {
    isDomainPrivateDialogueFull,
} from 'product-types/dist/private-dialogue/DomainPrivateDialogueFull';


export const getDialoguesAction = function () {
    return createRequest('private-dialogues/list', { method: 'GET' })
        .then((response) => {
            if (Array.isArray(response.data)) {
                return response.data.filter(isDomainPrivateDialogueFull);
            }
            return [];
        });
};