import { createEffect, createEvent, createStore } from 'effector';


export const increment = createEvent();
export const counter  = createStore(0)
    .on(increment, (state) => state + 1);