import { assertDomainUser } from 'product-types/dist/user/DomainUser';
import { createRequest } from '$lib/fetch/createRequest';


export const refreshAuthAction = function () {
    return createRequest('authentication', { method: 'get' })
        .then((response) => {
            assertDomainUser(response.data, 'data', 'DomainAuthResponse');
            return response.data;
        })
};