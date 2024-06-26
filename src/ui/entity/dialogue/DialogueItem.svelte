<script lang="ts">
    import FakeAvatar from '@/entity/user/FakeAvatar/FakeAvatar.svelte';
    import Link from '@/shared/link/Link/Link.svelte';
    import type { HTMLAnchorAttributes } from 'svelte/elements';
    import type { DomainMessage } from 'product-types/dist/message/DomainMessage';
    import type { DomainPrivateDialogueFull } from 'product-types/dist/private-dialogue/DomainPrivateDialogueFull';
    import Icon from '@iconify/svelte';


    interface $$Props extends HTMLAnchorAttributes {
        dialogue: DomainPrivateDialogueFull;
        message: DomainMessage;
    }

    export let dialogue: DomainPrivateDialogueFull;
    export let message: DomainMessage;
</script>

<div class="container">
    <Link href={`/dialogues/${dialogue.id}`} class="link">
        <FakeAvatar letter={dialogue.title[0] ?? dialogue.user.login[0]}/>
        <div class="content">
            <header class="header">
                <h3>{dialogue.title ? dialogue.title : dialogue.user.login}</h3>
                <div>
                    {#if dialogue.companionArchived}
                        <Icon icon="ion:archive"/>
                    {/if}
                    {#if dialogue.companionDeleted}
                        <Icon icon="ion:remove"/>
                    {/if}
                    {#if dialogue.meArchived}
                        <Icon icon="ion:archive"/>
                    {/if}
                </div>
            </header>
            {#if message}
                <p class="message">{message?.message}</p>
            {:else}
                <p class="message empty">Диалог пустой</p>
            {/if}
        </div>
    </Link>
</div>

<style lang="scss">
    .container {
        --fake-avatar-width  : 50px;
        --fake-avatar-height : 50px;

        .link {
            display     : flex;
            gap         : var(--offset-small);
            align-items : center;
        }

        .content {
            display        : flex;
            flex-direction : column;
            width          : 100%;
        }

        .header {
            display         : flex;
            gap             : var(--offset-small);
            justify-content : space-between;
            align-items     : center;
            width           : 100%;
        }

        .message {
            &.empty {
                color : var(--text-second-color);
            }
        }
    }
</style>