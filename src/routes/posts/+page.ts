import { loadPosts } from '@/action/post/loadPosts';


export async function load () {
    return { posts: await loadPosts() };
}