import { createRequest } from '$lib/fetch/createRequest';
import {
    isDomainPrivateDialogueFull,
} from 'product-types/dist/private-dialogue/DomainPrivateDialogueFull';


export const getDialogueByIdAction = function (id: string) {
    return createRequest(`private-dialogues/${ id }`, { method: 'get' })
        .then((response) => {
            if (isDomainPrivateDialogueFull(response.data)) {
                return response.data;
            }
            return null;
        });
};