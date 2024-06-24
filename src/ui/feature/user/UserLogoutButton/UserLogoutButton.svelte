<script>
    import Button from "@/shared/button/Button/Button.svelte";
    import Icon from "@iconify/svelte";
    import {logoutEffect, authPending} from "@/model/authentication/authentication.model";
</script>

<Button quad on:click={() => logoutEffect()} disabled={$authPending}>
    <Icon icon="ion:log-out-outline"/>
</Button>