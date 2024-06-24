import { api } from '$lib/api/api';
import {
    assertDomainResponse,
} from 'product-types/dist/response/DomainResponse';


export const createRequest = function (url: RequestInfo, init?: RequestInit) {
    return api(url, init)
        .then((response) => response['data'] ?? response.json())
        .then((data: unknown) => {
            assertDomainResponse(data, 'data', 'DomainResponse');
            return data;
        });
};