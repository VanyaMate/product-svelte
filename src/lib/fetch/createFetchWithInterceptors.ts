export type RequestInterceptor = (data: RequestInfo, init: RequestInit) => Promise<[ RequestInfo, RequestInit ]>;
export type ResponseInterceptor = (response: Response) => Promise<Response>;

export const createFetchWithInterceptors = (
    requestInterceptors: Array<RequestInterceptor>,
    responseInterceptors: Array<ResponseInterceptor>,
) => {
    return async (data: RequestInfo, init: RequestInit = {}): Promise<Response> => {
        for (const interceptor of requestInterceptors) {
            [ data, init ] = await interceptor(data, init);
        }

        let response = await fetch(data, init);

        for (const interceptor of responseInterceptors) {
            response = await interceptor(response);
        }

        return response;
    };
};