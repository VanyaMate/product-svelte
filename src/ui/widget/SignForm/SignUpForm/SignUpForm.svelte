<script lang="ts">
    import { authPending, registrationEffect } from '@/model/authentication/authentication.model';
    import { loginValidator } from '$lib/validation/login.validator';
    import { passwordValidator } from '$lib/validation/password.validator';
    import { ButtonStyleType } from '@/shared/button/Button/types/Button.type';
    import Input from '@/shared/input/Input/Input.svelte';
    import Button from '@/shared/button/Button/Button.svelte';
    import type { HTMLFormAttributes } from 'svelte/elements';
    import Checkbox from '@/shared/input/Checkbox/Checkbox.svelte';
    import { emailValidator } from '$lib/validation/email.validator';


    interface $$Props extends HTMLFormAttributes {
        firstInput?: HTMLInputElement;
    }

    export let firstInput: HTMLInputElement | undefined = undefined;

    let email: string          = '';
    let emailValid: boolean    = true;
    let login: string          = '';
    let loginValid: boolean    = true;
    let password: string       = '';
    let passwordValid: boolean = true;
    let remember: boolean      = true;

    $: formIsInvalid = !(login && password && email && emailValid && loginValid && passwordValid);

    $: onSubmit = function (event: Event) {
        event.preventDefault();
        registrationEffect({ login, email, password, remember })
            .then(() => {
                login    = '';
                password = '';
                email    = '';
            });
    };

</script>

<form {...$$restProps} class:pending={$authPending} on:submit={onSubmit}>
    <Input
            id="email"
            type="text"
            bind:value={email}
            bind:valid={emailValid}
            label="Почта"
            placeholder="Введите почту"
            validationMethod={emailValidator}
            bind:input={firstInput}
    />
    <Input
            id="login"
            type="text"
            bind:value={login}
            bind:valid={loginValid}
            label="Логин"
            placeholder="Введите логин"
            validationMethod={loginValidator}
    />
    <Input
            id="password"
            type="password"
            bind:value={password}
            bind:valid={passwordValid}
            label="Пароль"
            placeholder="Введите пароль"
            validationMethod={passwordValidator}
    />
    <Checkbox bind:checked={remember} label="Запомнить меня" id="remember"/>
    <Button type="submit" disabled={formIsInvalid} styleType={ButtonStyleType.PRIMARY}>Войти</Button>
</form>
<style>
    form {
        width          : 300px;
        display        : flex;
        flex-direction : column;
        gap            : 10px;
    }

    .pending {
        pointer-events : none;
        opacity        : .6;
    }
</style>