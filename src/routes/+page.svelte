<script lang="ts">
    import '@/style/index';
    import ThemeToggleButton from '@/feature/theme/ThemeToggleButton/ThemeToggleButton.svelte';
    import { authData, authPending, loginEffect } from '@/model/authentication/authentication.model';
    import UserLogoutButton from '@/feature/user/UserLogoutButton/UserLogoutButton.svelte';


    let login: string     = '';
    let password: string  = '';
    let remember: boolean = true;

    $: onSubmit = function (event: Event) {
        event.preventDefault();
        loginEffect({ login, password, remember });
    };
</script>

<h1>Clear project</h1>
<container>
    <ThemeToggleButton/>

    {#if $authData}
        <h1>Hello {$authData.login}</h1>
        <UserLogoutButton/>
    {:else}
        <form class:pending={$authPending} on:submit={onSubmit}>
            <input type="text" bind:value={login}/>
            <input type="password" bind:value={password}/>
            <input type="checkbox" bind:checked={remember}/>
            <button type="submit">Войти</button>
        </form>
    {/if}
</container>

<style>
    container {
        display : flex;
        gap     : 5px;
    }

    .pending {
        pointer-events : none;
        opacity        : .6;
    }

    form {
        display        : flex;
        flex-direction : column;
        gap            : 5px;
    }

    input {
        padding : 5px;
    }
</style>