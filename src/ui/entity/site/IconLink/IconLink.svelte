<script lang="ts">
    import type { HTMLAnchorAttributes } from 'svelte/elements';
    import Icon from '@iconify/svelte';


    interface $$Props extends HTMLAnchorAttributes {
        icon: string;
        href: string;
    }

    export let icon: string = '';
    export let href: string = '#';
</script>

<a {...$$restProps} {href}>
    <span class="icon">
        <Icon {icon} class="icon-place"/>
    </span>
    <span class="text">
        <slot/>
    </span>
</a>

<style lang="scss">
    a {
        width       : 100%;
        min-width   : 300px;
        display     : flex;
        gap         : var(--offset-small);
        align-items : center;
        white-space : nowrap;
    }

    .icon {
        width           : 30px;
        height          : 30px;
        background      : var(--bg-ghost-color);
        display         : flex;
        justify-content : center;
        align-items     : center;
        color           : var(--text-second-color);
        border-radius   : var(--offset-small);
    }

    .text {
        color : var(--text-second-color);
    }
</style>