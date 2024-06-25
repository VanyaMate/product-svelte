<script context="module">
    export let links = [
        {text: 'Моя страница', href: '/', icon: 'ion:home'},
        {text: 'Диалоги', href: '/dialogues', icon: 'ion:mail'},
    ]
</script>
<script>
    import {page} from '$app/stores';
    import IconLink from "@/shared/link/IconLink/IconLink.svelte";
</script>

<nav>
    <ul>
        {#each links as {text, icon, href}}
            <li>
                <IconLink {icon} {href} class={$page.url.pathname === href ? 'active' : ''}>{text}</IconLink>
            </li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        width  : 100%;
        height : 100%;
    }

    ul {
        display         : flex;
        flex-direction  : column;
        gap             : var(--offset-small);
        list-style-type : none;
    }

    :global(.active > .icon) {
        color      : var(--text-main-color);
        background : var(--primary-color);
    }
</style>