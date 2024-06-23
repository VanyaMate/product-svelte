import { createEffect, createStore } from 'effector';
import { loadPosts } from '@/action/post/loadPosts';


export type DomainPost = {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export const loadPostsEffect = createEffect(loadPosts);
export const setPostsEffect  = createEffect<DomainPost[], DomainPost[], any>(async (posts) => posts);

export const posts = createStore<Array<DomainPost>>([])
    .on(loadPostsEffect.done, (state, payload) => payload.result)
    .on(setPostsEffect.done, (state, payload) => payload.result);
