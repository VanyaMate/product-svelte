import type {
    RequestInterceptor,
} from '$lib/fetch/createFetchWithInterceptors';
import {
    LOCAL_STORAGE_USER_ACCESS_TOKEN, LOCAL_STORAGE_USER_REFRESH_TOKEN,
} from '@/const/user/user.const';


export const addUserTokensInterceptor: RequestInterceptor = async (data, init) => {
    const accessToken: string | undefined  = localStorage.getItem(LOCAL_STORAGE_USER_ACCESS_TOKEN);
    const refreshToken: string | undefined = localStorage.getItem(LOCAL_STORAGE_USER_REFRESH_TOKEN);
    init.headers                           = new Headers(init.headers);

    if (accessToken) {
        init.headers.set('authorization', accessToken);
    }
    if (refreshToken) {
        init.headers.set('refresh-token', refreshToken);
    }

    return [ data, init ];
};