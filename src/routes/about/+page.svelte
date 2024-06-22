<script lang="ts">
    import TextInput from '@/shared/input/TextInput.svelte';


    let value: string = '';
</script>

<h1>AboutPage</h1>
<p>{value}</p>
<TextInput bind:value={value}/>