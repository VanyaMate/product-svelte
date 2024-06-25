<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="container">
    <h3 class="error">{$page.error.message}</h3>
    <p class="trace">{ $page.url.pathname }</p>
</div>

<style lang="scss">
    .container {
        width           : 100%;
        height          : 100%;
        max-width       : 100%;
        display         : flex;
        flex-direction  : column;
        align-items     : center;
        justify-content : center;
        gap             : var(--offset-medium);
        padding         : var(--offset-large);

        .error {
            width         : fit-content;
            padding       : var(--offset-medium);
            border-radius : var(--offset-medium);
            border        : 2px solid var(--danger-color);
        }

        .trace {
            color       : var(--ghost-color);
            white-space : break-spaces;
            word-break  : break-all;
        }
    }
</style>