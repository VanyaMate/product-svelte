<button on:click class="container">
    <slot/>
</button>

<style lang="scss">
    .container {
        padding : var(--offset-small);
    }
</style>