<script>
    import "../ui/styles/index";
    import Button from "../ui/shared/button/Button.svelte";
    import {counter, increment} from "../model/counter/counter.model";
</script>

<h1>HomePage</h1>
<p>{$counter}</p>
<Button onClick={increment}>Increment</Button>