import { createStore } from 'effector';
import type {
    DomainServiceResponseError,
} from 'product-types/dist/error/DomainServiceResponseError';
import type { DomainUser } from 'product-types/dist/user/DomainUser';
import { createEffect } from 'effector/compat';
import { loginAction } from '@/action/authentication/login.action';
import { logoutAction } from '@/action/authentication/logout.action';
import { refreshAction } from '@/action/authentication/refresh.action';


export const loginEffect   = createEffect(loginAction);
export const logoutEffect  = createEffect(logoutAction);
export const refreshEffect = createEffect(refreshAction);

export const authPending = createStore<boolean>(false)
    .on(loginEffect, () => true)
    .on(logoutEffect, () => true)
    .on(refreshEffect, () => true)
    .on(loginEffect.finally, () => false)
    .on(logoutEffect.finally, () => false)
    .on(refreshEffect.finally, () => false);

export const authError = createStore<DomainServiceResponseError | null>(null);

export const authData = createStore<DomainUser | null>(null)
    .on(loginEffect, () => null)
    .on(loginEffect.done, (_, payload) => payload.result)
    .on(logoutEffect.finally, () => null)
    .on(refreshEffect.done, (_, payload) => payload.result);