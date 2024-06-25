<script lang="ts">
    import '@/style/index';
    import { authData } from '@/model/authentication/authentication.model';
    import UserLogoutButton from '@/feature/user/UserLogoutButton/UserLogoutButton.svelte';
    import SignForm from '@/widget/SignForm/SignForm.svelte';
</script>

{#if $authData}
    <h1>Hi ${$authData.login}</h1>
    <UserLogoutButton/>
{:else}
    <SignForm/>
{/if}