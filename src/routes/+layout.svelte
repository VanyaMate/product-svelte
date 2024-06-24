<script lang="ts">
    import { theme } from '@/model/theme/theme.model';
    import { onMount } from 'svelte';
    import { refreshEffect } from '@/model/authentication/authentication.model';


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

<slot/>
