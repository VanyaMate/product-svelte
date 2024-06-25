<script lang="ts">
    import type { HTMLAnchorAttributes } from 'svelte/elements';
    import { LinkStyleType } from '@/shared/link/Link/types/Link.type';


    interface $$Props extends HTMLAnchorAttributes {
        type?: LinkStyleType;
    }

    export let href: string        = '#';
    export let type: LinkStyleType = LinkStyleType.PRIMARY;
</script>

<a {...$$restProps} {href} class="{type} {$$restProps.class}">
    <slot/>
</a>

<style>
    a {
        width           : fit-content;
        text-decoration : none;
        outline         : none;
        border-radius   : var(--offset-small);
        box-shadow      : 0 0 0 0 transparent;
        transition      : var(--transition-medium);

        &:hover {
            cursor : pointer;
        }

        &.primary {
            color : var(--primary-color);

            &::selection {
                background : var(--primary-color);
                color      : var(--on-primary-text-color);
            }

            &:focus,
            &:hover {
                box-shadow : 0 0 0 2px var(--bg-main-color), 0 0 0 4px var(--primary-color);
                background : var(--bg-main-color);
                color      : var(--primary-color);
            }
        }

        &.second {
            color : var(--second-color);

            &::selection {
                background : var(--second-color);
                color      : var(--on-second-text-color);
            }

            &:focus,
            &:hover {
                box-shadow : 0 0 0 2px var(--bg-main-color), 0 0 0 4px var(--second-color);
                background : var(--bg-main-color);
            }
        }

        &.ghost {
            color : var(--text-second-color);

            &::selection {
                background : var(--ghost-color);
                color      : var(--on-ghost-text-color);
            }

            &:focus,
            &:hover {
                box-shadow : 0 0 0 2px var(--bg-main-color), 0 0 0 4px var(--ghost-color);
                background : var(--bg-main-color);
            }
        }
    }
</style>