import type {
    DomainRegistrationData,
} from 'product-types/dist/authorization/DomainRegistrationData';
import { createRequest } from '$lib/fetch/createRequest';
import {
    assertDomainAuthResponse,
} from 'product-types/dist/authorization/DomainAuthResponse';


export const registrationAction = function (registrationData: DomainRegistrationData) {
    return createRequest('authentication/registration', {
        method: 'post',
        body  : JSON.stringify(registrationData),
    })
        .then((response) => {
            assertDomainAuthResponse(response.data, 'data', 'DomainAuthResponse');
            return response.data.user;
        });
    ;
};