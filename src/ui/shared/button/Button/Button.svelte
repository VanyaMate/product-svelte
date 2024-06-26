<script lang="ts">
    import { ButtonSizeType, ButtonStyleType } from '@/shared/button/Button/types/Button.type';
    import type { HTMLButtonAttributes } from 'svelte/elements';


    interface $$Props extends HTMLButtonAttributes {
        size?: ButtonSizeType,
        styleType?: ButtonStyleType,
        quad?: boolean
    }

    export let styleType: ButtonStyleType = ButtonStyleType.PRIMARY;
    export let size: ButtonSizeType       = ButtonSizeType.MEDIUM;
    export let quad: boolean              = false;
</script>

<button {...$$restProps} on:click class="container {styleType} {size} {$$restProps.class ?? ''}" class:quad>

    <slot/>
</button>

<style lang="scss">
    .container {
        border          : none;
        outline         : none;
        cursor          : pointer;
        box-shadow      : 0 0 0 0 transparent;
        transition      : var(--transition-medium);
        display         : inline-flex;
        align-items     : center;
        justify-content : center;
        line-height     : 0;
        overflow        : hidden;

        &:disabled {
            background : var(--ghost-color);
            color      : var(--on-ghost-text-color);
            cursor     : default;
        }

        &.primary:not(:disabled) {
            background : var(--primary-color);
            color      : var(--on-primary-text-color);

            &:focus,
            &:hover {
                box-shadow : 0 0 0 2px var(--bg-main-color), 0 0 0 4px var(--primary-color), 0 0 25px -10px var(--primary-color);
            }
        }

        &.second:not(:disabled) {
            background : var(--second-color);
            color      : var(--on-second-text-color);

            &:focus,
            &:hover {
                box-shadow : 0 0 0 2px var(--bg-main-color), 0 0 0 4px var(--second-color);
            }
        }

        &.ghost:not(:disabled) {
            background : var(--ghost-color);
            color      : var(--on-ghost-text-color);

            &:focus,
            &:hover {
                box-shadow : 0 0 0 2px var(--bg-main-color), 0 0 0 4px var(--ghost-color);
            }
        }

        &.danger:not(:disabled) {
            background : var(--danger-color);
            color      : var(--on-danger-color);

            &:focus,
            &:hover {
                box-shadow : 0 0 0 2px var(--bg-main-color), 0 0 0 4px var(--danger-color);
            }
        }

        &.small {
            height        : 20px;
            padding       : 0 var(--offset-small);
            border-radius : var(--offset-small);
            font-size     : .85em;

            &.quad {
                width     : 20px;
                min-width : 20px;
                padding   : 0;
            }
        }

        &.medium {
            height        : 30px;
            padding       : 0 var(--offset-medium);
            border-radius : var(--offset-small);

            &.quad {
                width     : 30px;
                min-width : 30px;
                padding   : 0;
            }
        }

        &.large {
            height        : 40px;
            padding       : 0 var(--offset-large);
            border-radius : var(--offset-small);
            font-size     : 1.15em;

            &.quad {
                width     : 40px;
                min-width : 40px;
                padding   : 0;
            }
        }
    }
</style>