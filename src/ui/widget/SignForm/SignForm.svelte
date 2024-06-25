<script lang="ts">
    import SignInForm from '@/widget/SignForm/SignInForm/SignInForm.svelte';
    import SignUpForm from '@/widget/SignForm/SignUpForm/SignUpForm.svelte';
    import Button from '@/shared/button/Button/Button.svelte';
    import { ButtonStyleType } from '@/shared/button/Button/types/Button.type';
    import { tick } from 'svelte';


    type FormType = 'sign-up' | 'sign-in';
    export let firstInput: HTMLInputElement | undefined = undefined;
    export let formType: FormType                       = 'sign-in';

    $: toggleForm = function (type: FormType) {
        return async () => {
            formType = type;
            await tick();
            firstInput?.focus();
        };
    };
</script>
<div class="container">
    <header>
        <img src="/android-chrome-192x192.png" alt="logo"/>
        <h1>Продукт</h1>
    </header>
    <div class="forms">
        <div class="control">
            <Button
                    class="toggle-button"
                    styleType={formType === 'sign-in' ? ButtonStyleType.PRIMARY : ButtonStyleType.GHOST}
                    on:click={toggleForm('sign-in')}
                    aria-label="Переключить на форму входа"
            >
                Войти
            </Button>
            <Button
                    class="toggle-button"
                    styleType={formType === 'sign-up' ? ButtonStyleType.PRIMARY : ButtonStyleType.GHOST}
                    on:click={toggleForm('sign-up')}
                    aria-label="Переключить на форму регистрации"
            >
                Регистрация
            </Button>
        </div>
        {#if formType === 'sign-in'}
            <SignInForm bind:firstInput/>
        {:else}
            <SignUpForm bind:firstInput/>
        {/if}
    </div>
</div>

<style lang="scss">
    .container {
        width           : 100%;
        height          : 100%;
        display         : flex;
        gap             : 100px;
        align-items     : center;
        justify-content : center;

        header {
            display        : flex;
            flex-direction : column;
            gap            : var(--offset-small);
            align-items    : center;
            border-right   : 1px dotted var(--ghost-color);
            padding        : 30px 100px 30px 0;
        }

        img {
            width         : 120px;
            height        : 120px;
            border-radius : 50%;
            box-shadow    : 0 0 200px 0 var(--primary-color);
        }

        h1 {
            font-size : var(--font-size-xxxl);
        }

        .forms {
            display        : flex;
            flex-direction : column;
            gap            : var(--offset-large);

            .control {
                width           : 100%;
                display         : flex;
                gap             : var(--offset-small);
                justify-content : center;

                & > :global(.toggle-button) {
                    width : 100%;
                }
            }
        }
    }
</style>