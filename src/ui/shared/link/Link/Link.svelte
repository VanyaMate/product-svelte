<script lang="ts">
    import type { HTMLAnchorAttributes } from 'svelte/elements';


    interface $$Props extends HTMLAnchorAttributes {
    }

    export let href: string = '#';
</script>

<a {...$$restProps} {href}>
    <slot/>
</a>

<style>
    a {
        text-decoration : none;
        color           : var(--primary-color);
    }
</style>