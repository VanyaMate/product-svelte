import { api } from '$lib/api/api';
import {
    assertDomainResponse,
} from 'product-types/dist/response/DomainResponse';
import {
    assertDomainAuthResponse,
} from 'product-types/dist/authorization/DomainAuthResponse';
import { assertDomainUser } from 'product-types/dist/user/DomainUser';
import { createRequest } from '$lib/fetch/createRequest';


export const refreshAction = function () {
    return createRequest('authentication', { method: 'get' })
        .then((response) => {
            assertDomainUser(response.data, 'data', 'DomainAuthResponse');
            return response.data;
        })
        .catch((error) => console.log(error));
};