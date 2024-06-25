<script lang="ts">
    import type { HTMLFormAttributes } from 'svelte/elements';


    interface $$Props extends HTMLFormAttributes {
        pending?: boolean;
    }

    export let pending: boolean | undefined = undefined;
</script>

<form {...$$restProps} class:pending>
    <slot/>
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