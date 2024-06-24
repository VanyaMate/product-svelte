import type { ResponseInterceptor } from '$lib/fetch/createFetchWithInterceptors';
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
            if (isDomainTokens(data.tokens)) {
                localStorage.setItem(LOCAL_STORAGE_USER_ACCESS_TOKEN, data.tokens[0]);
                localStorage.setItem(LOCAL_STORAGE_USER_REFRESH_TOKEN, data.tokens[1]);
            }
        }
    }

    return response;
};