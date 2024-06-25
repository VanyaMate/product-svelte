import type {
    ResponseInterceptor,
} from '$lib/fetch/createFetchWithInterceptors';
import { isDomainResponse } from 'product-types/dist/response/DomainResponse';
import { isDomainTokens } from 'product-types/dist/token/DomainTokens';
import {
    LOCAL_STORAGE_USER_ACCESS_TOKEN,
    LOCAL_STORAGE_USER_REFRESH_TOKEN,
} from '@/const/user/user.const';


export const responseTokenRefreshedInterceptor: ResponseInterceptor = async (response) => {
    const responsePayload: unknown = response['data'];
    if (responsePayload) {
        if (isDomainResponse(responsePayload)) {
            if (isDomainTokens(responsePayload.tokens)) {
                localStorage.setItem(LOCAL_STORAGE_USER_ACCESS_TOKEN, responsePayload.tokens[0]);
                localStorage.setItem(LOCAL_STORAGE_USER_REFRESH_TOKEN, responsePayload.tokens[1]);
            }
        }
    }

    return response;
};