import type { RequestInterceptor } from '$lib/fetch/createFetchWithInterceptors';


export const addBaseUrlInterceptor = (baseUrl: string): RequestInterceptor => async function (url, init) {
    return [ baseUrl + url, init ];
};