<script lang="ts">
    import type { DomainPost } from '@/model/post/post.model';


    export let data: {
        posts: DomainPost[]
    };
</script>

<div class="container">
    {#each data.posts as post (post.id)}
        <div class="item">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    {/each}
</div>

<style>
    .container {
        display        : flex;
        flex-direction : column;
        gap            : 5px;
    }

    .item {
        padding       : 10px;
        border-radius : 5px;
        border        : 1px solid #aaa;
    }
</style>