import {
    createFetchWithInterceptors,
} from '../fetch/createFetchWithInterceptors';
import {
    addUserTokensInterceptor,
} from '$lib/api/interceptors/request/add-user-tokens.interceptor';
import {
    responseTokenRefreshedInterceptor,
} from '$lib/api/interceptors/response/refresh-user-tokens.interceptor';
import {
    addBaseUrlInterceptor,
} from '$lib/api/interceptors/request/add-base-url.interceptor';
import {
    addJsonContentTypeInterceptor,
} from '$lib/api/interceptors/request/add-json-content-type.interceptor';
import {
    returnResponseJsonInterceptor,
} from '$lib/api/interceptors/response/return-response-json.interceptor';


export const api = createFetchWithInterceptors([
    addBaseUrlInterceptor(`${ __API__ }/v1/`),
    addJsonContentTypeInterceptor,
    addUserTokensInterceptor,
], [
    returnResponseJsonInterceptor,
    responseTokenRefreshedInterceptor,
]);