<script>
    export let onClick;
</script>

<style lang="scss">
    .container {
        padding : var(--offset-small);
    }
</style>

<button class="container" on:click={onClick}>
    <slot/>
</button>