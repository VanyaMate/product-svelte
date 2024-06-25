<script lang="ts">
    import { theme } from '@/model/theme/theme.model';
    import { onMount } from 'svelte';
    import { authData, refreshEffect } from '@/model/authentication/authentication.model';
    import MainLayout from '@/shared/layout/MainLayout/MainLayout.svelte';
    import IconLink from '@/shared/link/IconLink/IconLink.svelte';
    import '@/style/index';
    import SideNavigationMenu from '@/widget/site/SideNavigationMenu/SideNavigationMenu.svelte';


    // TODO: Перенести в хук?
    onMount(refreshEffect);

    // TODO: Перенести в хук?
    $: {
        if ($theme) {
            const body                  = document.body;
            const previousTheme: string = body.getAttribute('data-theme') ?? '';
            if (previousTheme) {
                body.classList.remove(previousTheme);
            }
            body.classList.add($theme);
            body.setAttribute('data-theme', $theme);
        }
    }
</script>

{#if $authData}
    <MainLayout>
        <div slot="header">header filler</div>
        <SideNavigationMenu slot="left-side-menu"/>
        <div slot="right-side-menu">right side menu</div>
        <slot/>
    </MainLayout>
{:else}
    <slot/>
{/if}
