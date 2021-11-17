<script lang="ts">
	import {API_URL} from "../../envStore";
	import {isLoginStore} from "../../appStore"
	import {beforeUpdate} from "svelte";
	import UserGame from "./UserGame.svelte";
	import GameDetail from "./GameDetail.svelte";

	let isLogin:boolean;
	isLoginStore.subscribe(is =>{
		isLogin = is
	})
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
        <div class="detail">
            <GameDetail GameDetail={Game.gameDetail} />
        </div>
<!--        <hr>-->
        <div class="usergame">
            {#if isLogin}
                {#if Game.userGame}
                    <UserGame UserGame={Game.userGame} selectedStatus={Game.userGame.UserGameStatus}/>
                {:else }
                    <UserGame/>
                {/if}
            {/if}
        </div>
    {:catch error}
        <p>{error}</p>
    {/await}
</div>

<style>
    .game{
        display: grid;
        grid-template-columns: repeat(2, 3fr);
        grid-gap: 10px;
        grid-auto-rows: minmax(100px, auto);
    }
    .detail{
        grid-column: 1;
        grid-row: 1;
    }
    .usergame{
        grid-column: 2;
        grid-row: 1;
    }
</style>