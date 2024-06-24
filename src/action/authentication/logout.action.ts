import { api } from '$lib/api/api';
import {
    LOCAL_STORAGE_USER_ACCESS_TOKEN,
    LOCAL_STORAGE_USER_REFRESH_TOKEN,
} from '@/const/user/user.const';
import { createRequest } from '$lib/fetch/createRequest';


export const logoutAction = function () {
    return createRequest('authentication/logout').finally(() => {
        localStorage.removeItem(LOCAL_STORAGE_USER_ACCESS_TOKEN);
        localStorage.removeItem(LOCAL_STORAGE_USER_REFRESH_TOKEN);
    });
};