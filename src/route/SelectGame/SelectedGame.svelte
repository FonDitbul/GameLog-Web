<script lang="ts">
	import {API_URL} from "../../envStore";
	import {beforeUpdate} from "svelte";
	import UserGame from "./UserGame.svelte";
	import GameDetail from "./GameDetail.svelte";

	const gameId:number = Number(location.search.split('?id=')[1])
	async function getSelectedGame(id){
		const response = await fetch(API_URL+'select?gameId='+gameId,{
			method:'GET',
			credentials: "include",
		})
		return response.json();
	}
	let gamePromise;
	beforeUpdate(async () => {
		gamePromise = getSelectedGame(gameId);
	})
</script>

<div class="game">
    {#await gamePromise}
    {:then Game}
        <GameDetail GameDetail={Game.gameDetail} />
        <hr>
        {#if Game.userGame}
            <UserGame UserGame={Game.userGame}/>
        {/if}
    {:catch error}
        <p>{error}</p>
    {/await}
</div>


<style>
    .game{
        float: left;
    }
</style>