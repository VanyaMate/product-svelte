import { createStore } from 'effector';
import type {
    DomainServiceResponseError,
} from 'product-types/dist/error/DomainServiceResponseError';
import type { DomainUser } from 'product-types/dist/user/DomainUser';
import { createEffect } from 'effector/compat';
import { loginAction } from '@/action/authentication/login.action';
import { logoutAction } from '@/action/authentication/logout.action';
import { refreshAuthAction } from '@/action/authentication/refresh-auth.action';
import { returnValidErrors } from '$lib/error/returnValidErrors';
import {
    registrationAction,
} from '@/action/authentication/registration.action';


export const loginEffect        = createEffect(loginAction);
export const registrationEffect = createEffect(registrationAction);
export const logoutEffect       = createEffect(logoutAction);
export const refreshEffect      = createEffect(refreshAuthAction);

export const authPending = createStore<boolean>(false)
    .on(loginEffect, () => true)
    .on(registrationEffect, () => true)
    .on(logoutEffect, () => true)
    .on(refreshEffect, () => true)
    .on(loginEffect.finally, () => false)
    .on(registrationEffect.finally, () => false)
    .on(logoutEffect.finally, () => false)
    .on(refreshEffect.finally, () => false);

export const authError = createStore<DomainServiceResponseError | null>(null)
    .on(loginEffect.fail, (_, payload) => returnValidErrors(payload.error))
    .on(registrationEffect.fail, (_, payload) => returnValidErrors(payload.error))
    .on(refreshEffect.fail, (_, payload) => returnValidErrors(payload.error));

export const authData = createStore<DomainUser | null>(null)
    .on(loginEffect, () => null)
    .on(loginEffect.done, (_, payload) => payload.result ?? null)
    .on(registrationEffect, () => null)
    .on(registrationEffect.done, (_, payload) => payload.result ?? null)
    .on(logoutEffect.finally, () => null)
    .on(refreshEffect.done, (_, payload) => payload.result ?? null);