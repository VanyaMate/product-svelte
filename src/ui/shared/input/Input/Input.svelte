<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements';
    import type { Validator } from '$lib/validation/validator.type';


    interface $$Props extends HTMLInputAttributes {
        label?: string;
        containerClass?: string;
        id?: string;
        validationMethod?: Validator;
        valid?: boolean;
        input?: HTMLInputElement;
    }

    export let label: string | undefined               = undefined;
    export let containerClass: string | undefined      = undefined;
    export let id: string | undefined                  = undefined;
    export let validationMethod: Validator | undefined = undefined;
    export let value: string                           = '';
    export let valid: boolean                          = validationMethod ? !validationMethod(value) : true;
    export let input: HTMLInputElement | undefined     = undefined;

    let error: string    = '';
    let noValid: boolean = false;

    $: {
        if (validationMethod) {
            error   = validationMethod(value);
            noValid = !!value && (error !== '');
            valid   = !noValid;
        }
    }
</script>

<div class="container {containerClass}" class:noValid>
    {#if label}
        <label for={id} class="label">{label}</label>
    {/if}
    <input {...$$restProps} {id} bind:this={input} class="input {$$restProps.class ?? ''}" bind:value/>
    <div class="error">{error}</div>
</div>

<style lang="scss">
    .container {
        position       : relative;
        z-index        : 1;
        display        : flex;
        flex-direction : column;
        gap            : var(--offset-small);

        .error {
            position      : absolute;
            z-index       : 1;
            bottom        : calc(100% + var(--offset-medium));
            left          : 0;
            width         : 100%;
            padding       : var(--offset-medium);
            border-radius : var(--offset-medium);
            background    : var(--danger-color);
            color         : var(--on-danger-color);
            box-shadow    : 0 3px 5px -3px var(--danger-color);
            visibility    : hidden;
            opacity       : 0;
            transition    : var(--transition-medium);

            &::after {
                content    : '';
                position   : absolute;
                width      : 0;
                height     : 0;
                right      : 20px;
                top        : calc(100% - 2px);
                border     : 10px solid transparent;
                border-top : 10px solid var(--danger-color);
            }
        }

        .label {
            color : var(--ghost-color);
        }

        .input {
            position      : relative;
            z-index       : 2;
            width         : 100%;
            padding       : var(--offset-small);
            border-radius : var(--offset-small);
            background    : var(--bg-main-color);
            border        : 1px solid var(--border-main-color);
            outline       : none;
            transition    : var(--transition-medium);
            color         : var(--bg-main-foreground-color);
            box-shadow    : 0 0 0 0 transparent;

            &:focus {
                box-shadow : 0 0 0 1px var(--primary-color), 0 5px 25px -5px var(--primary-color);
                border     : 1px solid var(--primary-color);
            }
        }

        &.noValid .input:focus ~ .error {
            visibility : visible;
            opacity    : 1;
        }
    }
</style>
