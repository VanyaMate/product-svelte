<script>
    import Button from "@/shared/button/Button/Button.svelte";
    import Icon from "@iconify/svelte";
    import {logoutEffect, authPending} from "@/model/authentication/authentication.model";
    import {ButtonStyleType} from "@/shared/button/Button/types/Button.type";
</script>

<Button
        on:click={() => logoutEffect()}
        disabled={$authPending}
        styleType={ButtonStyleType.DANGER}
        quad
>
    <Icon icon="ion:log-out-outline"/>
</Button>