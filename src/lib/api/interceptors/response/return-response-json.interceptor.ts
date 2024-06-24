import type { ResponseInterceptor } from '$lib/fetch/createFetch';


export const returnResponseJsonInterceptor: ResponseInterceptor = async (response) => {
    const responseData = await response.json();
    response['data']   = responseData;
    return response;
};