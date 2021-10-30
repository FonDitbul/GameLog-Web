<script lang="ts">
    export let category:Object;
	// import {params} from '@roxi/routify'
    function clickevent(){
    }
</script>


<div class='static category'>
    <h1>{category.type}</h1>
    <ul class="gamelist">
        {#each category.game as Game}
            <div class="static" on:click={clickevent}>
                <li class="box">
                    <img src={Game.cover[0].url}>
                    <p>{Game.name}</p>
                </li>
            </div>
        {/each}
    </ul>
</div>

<style>
    h1{
        font-size: 3em;
    }
    ul.gamelist{
        /*text-align: center;*/
        float:inherit;
        padding:10px;
    }
    div.category{
        /*text-align: center;*/
        /*position:relative;*/
    }
    .box {
        width: 300px;
        border: 1px solid #aaa;
        border-radius: 2px;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        padding: 1em;
        margin: 0 0 1em 0;
    }
</style>