import { createEffect, createStore } from 'effector';
import { getDialoguesAction } from '@/action/dialogue/getDialogues.action';
import {
    getDialogueByIdAction,
} from '@/action/dialogue/getDialogueById.action';
import type {
    DomainPrivateDialogueFull,
} from 'product-types/dist/private-dialogue/DomainPrivateDialogueFull';


export const getDialoguesEffect    = createEffect(getDialoguesAction);
export const getDialogueByIdEffect = createEffect(getDialogueByIdAction);

export const dialoguesLoading = createStore(false)
    .on(getDialoguesEffect, () => true)
    .on(getDialoguesEffect.finally, () => false);

export const dialogues = createStore<Array<DomainPrivateDialogueFull>>([])
    .on(getDialoguesEffect.done, (_, payload) => payload.result);