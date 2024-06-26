<script>
    import {onMount} from "svelte";
    import {dialogues, getDialoguesEffect} from "@/model/dialogue/dialogue.model";
    import DialogueItem from "@/entity/dialogue/DialogueItem.svelte";

    onMount(getDialoguesEffect);
</script>

<h2>Список диалогов</h2>
<section>
    {#each $dialogues as dialogue (dialogue.id)}
        <DialogueItem {dialogue} message={null}/>
    {/each}
</section>

<style>
    section {
        display        : flex;
        flex-direction : column;
        gap            : var(--offset-small);
    }
</style>
