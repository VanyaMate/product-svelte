import {
    assertDomainAuthResponse,
} from 'product-types/dist/authorization/DomainAuthResponse';
import type {
    DomainLoginData,
} from 'product-types/dist/authorization/DomainLoginData';
import { createRequest } from '$lib/fetch/createRequest';


export const loginAction = function (loginData: DomainLoginData) {
    return createRequest('authentication/login', {
        method: 'post',
        body  : JSON.stringify(loginData),
    })
        .then((response) => {
            assertDomainAuthResponse(response.data, 'data', 'DomainAuthResponse');
            return response.data.user;
        });
};