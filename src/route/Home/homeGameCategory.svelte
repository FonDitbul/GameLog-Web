<script lang="ts">
	import {Link} from "svelte-navigator";

	export let category:Object;
</script>


<div class='static category'>
    <h1>{category.type}</h1>
    <table class="gamelist">
        {#each category.game as Game}
            {#if Game}
                <Link to="/selectedgame?id={Game.id}">
                    <td class="box">
                        <img src={Game.cover[0].url}>
                        <p>{Game.name}</p>
                    </td>
                </Link>
            {/if}
        {/each}
    </table>
</div>

<style>
    h1{
        font-size: 3em;
    }
    table.gamelist{
        /*text-align: center;*/
        float:inherit;
        padding:10px;
    }
    div.category{
        /*text-align: center;*/
        /*position:relative;*/
    }
</style>