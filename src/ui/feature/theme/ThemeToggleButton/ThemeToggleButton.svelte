<script>
    import Button from "@/shared/button/Button/Button.svelte";
    import {ButtonStyleType} from "@/shared/button/Button/types/Button.type";
    import {setThemeEffect, theme} from "@/model/theme/theme.model";
    import {ThemeType} from "@/action/theme/setTheme.action";
    import Icon from "@iconify/svelte";

    $: isDark = `${$theme}` === ThemeType.DARK;
    $: onClick = function () {
        if (isDark) {
            return setThemeEffect(ThemeType.LIGHT);
        } else {
            return setThemeEffect(ThemeType.DARK);
        }
    }
</script>

<Button styleType={ButtonStyleType.GHOST} quad on:click={onClick}>
    {#if isDark}
        <Icon icon="ion:moon"/>
    {:else}
        <Icon icon="ion:sunny"/>
    {/if}
</Button>