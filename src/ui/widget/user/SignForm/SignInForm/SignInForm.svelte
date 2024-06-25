<script lang="ts">
    import { authPending, loginEffect } from '@/model/authentication/authentication.model';
    import { loginValidator } from '$lib/validation/login.validator';
    import { passwordValidator } from '$lib/validation/password.validator';
    import { ButtonStyleType } from '@/shared/button/Button/types/Button.type';
    import Input from '@/shared/input/Input/Input.svelte';
    import Button from '@/shared/button/Button/Button.svelte';
    import Checkbox from '@/shared/input/Checkbox/Checkbox.svelte';
    import Form from '@/shared/form/Form/Form.svelte';
    import type { HTMLFormAttributes } from 'svelte/elements';


    interface $$Props extends HTMLFormAttributes {
        firstInput?: HTMLInputElement;
    }

    export let firstInput: HTMLInputElement | undefined = undefined;

    let login: string          = '';
    let loginValid: boolean    = true;
    let password: string       = '';
    let passwordValid: boolean = true;
    let remember: boolean      = true;

    $: formIsInvalid = !login || !password || !loginValid || !passwordValid;

    $: onSubmit = function (event: Event) {
        event.preventDefault();
        loginEffect({ login, password, remember })
            .then(() => {
                login    = '';
                password = '';
            });
    };

</script>

<Form {...$$restProps} pending={$authPending} on:submit={onSubmit}>
    <Input
            id="login"
            type="text"
            bind:value={login}
            bind:valid={loginValid}
            label="Логин"
            placeholder="Введите логин"
            validationMethod={loginValidator}
            bind:input={firstInput}
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
</Form>