<script>
    import Button from "@/shared/button/Button/Button.svelte";
    import Icon from "@iconify/svelte";

    export let leftSideMenu_open = false;
    export let rightSideMenu_open = false;
</script>


<div class="container">
    <header class="header">
        <Button quad on:click={() => leftSideMenu_open = !leftSideMenu_open}>
            <Icon icon={leftSideMenu_open ? `ion:close` : `ion:menu`}/>
        </Button>
        <div class="content" inert={leftSideMenu_open}>
            <slot name="header"/>
        </div>
        <div inert={leftSideMenu_open}>
            <Button quad on:click={() => rightSideMenu_open = !rightSideMenu_open}>
                <Icon icon={rightSideMenu_open ? `ion:close` : `ion:person`}/>
            </Button>
        </div>
    </header>
    <div class="leftSideMenu" class:leftSideMenu_open>
        <slot name="left-side-menu"/>
    </div>
    <main inert={leftSideMenu_open} class="main" class:main_open={leftSideMenu_open}>
        <div class="main_content">
            <a href="#" on:click={(event) => event.preventDefault()} tabindex="-1" class="main_content_link"/>
            <slot/>
        </div>
    </main>
    <div
            class="rightSideMenu"
            class:rightSideMenu_open={rightSideMenu_open && !leftSideMenu_open}
            inert={leftSideMenu_open}
    >
        <slot name="right-side-menu"/>
    </div>
    <div
            class="closeOverlay"
            class:closeOverlay_hidden={!leftSideMenu_open}
            on:click={() => leftSideMenu_open = false}
            role="button"
            aria-label="Закрыть меню"
            tabindex="1"
    />
</div>

<style lang="scss">
    $header-height   : 50px;
    $side-width      : 40px;
    $side-width-open : 400px;

    .container {
        position : relative;
        overflow : hidden;
        padding  : $header-height 0 0 $side-width;
        display  : flex;

        .header {
            position    : fixed;
            z-index     : 2;
            top         : 0;
            left        : 0;
            width       : 100%;
            height      : $header-height;
            padding     : var(--offset-small);
            background  : var(--bg-second-color);
            display     : flex;
            gap         : var(--offset-medium);
            align-items : center;

            .content {
                width : 100%;
            }
        }

        .leftSideMenu {
            position   : fixed;
            top        : $header-height;
            overflow   : hidden;
            z-index    : 2;
            left       : 0;
            height     : calc(100% - $header-height);
            padding    : var(--offset-small);
            background : var(--bg-main-color);
            width      : $side-width;
            transition : var(--transition-medium);

            &_open {
                width      : $side-width-open;
                background : var(--bg-second-color);
                max-width  : 100%;
            }
        }

        .rightSideMenu {
            height     : calc(100dvh - $header-height);
            background : var(--bg-second-color);
            width      : 0;
            min-width  : 0;
            overflow   : hidden;
            transition : var(--transition-medium);

            &_open {
                min-width : $side-width-open;
                width     : $side-width-open;
            }

            .content {
                padding   : var(--offset-small);
                width     : 100%;
                min-width : $side_width-open;
            }
        }

        .main {
            transition : var(--transition-medium);
            transform  : translateX(0);
            padding    : var(--offset-small);
            height     : calc(100dvh - $header-height);
            overflow   : auto;
            position   : relative;
            width      : 100%;

            &_content {
                margin : auto;
                width  : 100%;
                height : 100%;

                &_link:focus {
                    outline : none;
                }
            }

            &_open {
                transform : translateX(20px);
            }
        }

        .closeOverlay {
            position   : fixed;
            width      : 100%;
            height     : 100%;
            top        : 0;
            left       : 0;
            z-index    : 1;
            transition : var(--transition-medium);
            opacity    : .8;
            background : var(--bg-main-color);
            cursor     : pointer;

            &_hidden {
                opacity    : 0;
                visibility : hidden;
            }
        }
    }
</style>