<script lang="ts">
	import {Link} from "svelte-navigator";

	let selected:string;
	let options = [
		{name:'aggregated_rating', 'text':'기관 점수 순'},
		{name:'name', 'text':'이름순'},
		{name:'first_relase_date', 'text':'출시일 순'},
		{name:'createdTime', 'text':'담은 날짜 순'},
	]
	import testGame from "../test/HomeGame.json"
	import {API_URL} from "../envStore";
	import {beforeUpdate} from "svelte";
	let tempLibgame = testGame[0]

	async function getServer(){
		const response = await fetch(API_URL + 'game/wishlist',{
			method:'GET',
			credentials: "include",
		})
		return new Promise((resolve, reject) => {
			response.json()
				.then(data=>{
					console.log(data)
					resolve(data.data)
				})
		})
	}
	let wishlistPromise;
	beforeUpdate(async()=>{ //HTML이 mount 된후에 작동하는 code
		wishlistPromise = getServer();
		// console.log(libraryPromise);
		// libraryPromise.then(r=>{console.log(r)})
	})
</script>

<h1>
    위시리스트
</h1>

<div class="library container mx-auto">
    <select bind:value={selected}>
        {#each options as option}
            <option value={option}>
                {option.text}
            </option>
        {/each}
    </select>
    <table class="library-table">
        {#await wishlistPromise}
        {:then wishlistGame}
            {#each wishlistGame as Game}
                <td>
                    <Link to="/gamedetail?id={Game.gameId}">
                        <div class="box">
                            <img src={Game.cover.url}>
                            <p>{Game.gameName}</p>
                        </div>
                    </Link>
                </td>
            {/each}
        {:catch error}
            <h1>{error}</h1>
        {/await}
    </table>
</div>

<style>
</style>
