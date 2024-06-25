<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements';


    interface $$Props extends Omit<HTMLInputAttributes, 'type'> {
        label?: string;
    }

    export let label: string | undefined     = undefined;
    export let id: string | undefined | null = undefined;
</script>

<div class="container">
    <input {...$$restProps} {id} type="checkbox"/>
    {#if label}
        <label for={id}>{label}</label>
    {/if}
</div>

<style lang="scss">
    .container {
        display         : flex;
        gap             : var(--offset-medium);
        align-items     : center;
        justify-content : center;

        label {
            display     : flex;
            align-items : center;
            gap         : var(--offset-medium);
            color       : var(--text-second-color);
            transition  : var(--transition-fast);
            user-select : none;

            &:after {
                content         : '✘';
                font-size       : 12px;
                color           : var(--text-main-color);
                display         : inline-flex;
                align-items     : center;
                justify-content : center;
                width           : 20px;
                height          : 20px;
                background      : var(--ghost-color);
                border-radius   : var(--offset-small);
                transition      : var(--transition-fast);
            }

            &:hover {
                cursor : pointer;
                color  : var(--text-main-color);
            }
        }

        input {
            position : fixed;
            top      : -100px;
            left     : -100px;
            opacity  : 0;
            width    : 0;
            height   : 0;
            overflow : hidden;

            &:checked {
                & ~ label {
                    color : var(--text-main-color);

                    &:after {
                        content    : '✓';
                        background : var(--primary-color);
                        box-shadow : 0 0 25px -5px var(--primary-color);
                    }
                }
            }

            &:focus {
                & ~ label {
                    color : var(--text-main-color);
                }

                & ~ label:after {
                    box-shadow : 0 0 0 2px var(--bg-main-color), 0 0 0 4px var(--ghost-color);
                }

                &:checked {
                    & ~ label:after {
                        box-shadow : 0 0 0 2px var(--bg-main-color), 0 0 0 4px var(--primary-color), 0 0 10px 0 var(--primary-color);
                    }
                }
            }
        }
    }
</style>
