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
            const responseData = responsePayload.data;
            if (isDomainTokens(responseData.tokens)) {
                localStorage.setItem(LOCAL_STORAGE_USER_ACCESS_TOKEN, responseData.tokens[0]);
                localStorage.setItem(LOCAL_STORAGE_USER_REFRESH_TOKEN, responseData.tokens[1]);
            }
        }
    }

    return response;
};