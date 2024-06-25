import { api } from '$lib/api/api';
import {
    assertDomainResponse, isDomainResponse,
} from 'product-types/dist/response/DomainResponse';


export const createRequest = function (url: RequestInfo, init?: RequestInit) {
    return api(url, init)
        .then((response) => response['data'] ?? response.json())
        .then((data: unknown) => {
            if (isDomainResponse(data)) {
                return data;
            }

            throw data;
        });
};