<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';


    interface $$Props extends HTMLAttributes<HTMLDivElement> {
        letter: string;
    }

    export let letter: string;
</script>

<div {...$$restProps}>
    {letter[0]}
</div>

<style>
    div {
        border-radius   : var(--offset-small);
        background      : var(--bg-ghost-color);
        display         : flex;
        align-items     : center;
        justify-content : center;
        width           : 30px;
        height          : 30px;
        text-transform  : uppercase;
    }
</style>