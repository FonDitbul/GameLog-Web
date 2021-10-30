<script lang="ts">
    import Image from './imagetest.svelte';

    export let category:Object;
</script>


<div class='category'>
    <h1>{category.type}</h1>
    <ul>
        {#each category.game as Game}
            <li>
                <p>{Game.name}</p>
                <Image cover={Game.cover}/>
            </li>
        {/each}
    </ul>
</div>

<style>
    div.category{
        /*position:relative;*/
    }
    ul{
        /*float:left;*/
        /*text-align: center;*/
        /*padding: 1em;*/
        /*list-style: none;*/
        /*margin-left: 10px;*/
    }
</style>