<script>
    import Link from "@/shared/link/Link/Link.svelte";
    import ThemeToggleButton from "@/feature/theme/ThemeToggleButton/ThemeToggleButton.svelte";
    import UserButton from "@/widget/user/UserButton/UserButton.svelte";
</script>

<div class="container">
    <Link href="/">
        <h2>Продукт</h2>
    </Link>
    <div class="control">
        <ThemeToggleButton/>
        <UserButton/>
    </div>
</div>

<style lang="scss">
    .container {
        display         : flex;
        align-items     : center;
        justify-content : space-between;
        gap             : var(--offset-small);

        h2 {
            font-size : var(--font-size-xxxl);
        }
    }

    .control {
        display     : flex;
        align-items : center;
        gap         : var(--offset-small);
    }
</style>