<script lang="ts">
    import { authData } from '@/model/authentication/authentication.model';
    import UserLogoutButton from '@/feature/user/UserLogoutButton/UserLogoutButton.svelte';
</script>

<h1>Hi ${$authData.login}</h1>
<UserLogoutButton/>