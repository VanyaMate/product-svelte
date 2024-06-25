<script>
    import {authData} from "@/model/authentication/authentication.model";
    import UserLogoutButton from "@/feature/user/UserLogoutButton/UserLogoutButton.svelte";
    import Link from "@/shared/link/Link/Link.svelte";
    import FakeAvatar from "@/entity/user/FakeAvatar/FakeAvatar.svelte";
</script>

<div class="container">
    <FakeAvatar letter={$authData.login}/>
    <Link href="/profile/{$authData.login}">
        {$authData.login}
    </Link>
    <UserLogoutButton/>
</div>

<style>
    .container {
        display     : flex;
        gap         : var(--offset-small);
        align-items : center;
        font-size   : var(--font-size-l);
    }
</style>