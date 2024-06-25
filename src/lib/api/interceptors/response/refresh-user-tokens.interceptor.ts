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
    const data: unknown = response['data'];
    if (data) {
        if (isDomainResponse(data)) {
            const payload = data.data;
            if (isDomainTokens(payload.tokens)) {
                localStorage.setItem(LOCAL_STORAGE_USER_ACCESS_TOKEN, payload.tokens[0]);
                localStorage.setItem(LOCAL_STORAGE_USER_REFRESH_TOKEN, payload.tokens[1]);
            }
        }
    }

    return response;
};