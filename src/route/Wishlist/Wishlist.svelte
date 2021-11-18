<script lang="ts">
	import {Link} from "svelte-navigator";
	import {API_URL} from "../../envStore";
	import {beforeUpdate, onMount} from "svelte";
	import {sortOptions} from "../store";

	let selected;
	let wishlistPromise;

	async function getServer(){
		const response = await fetch(API_URL + 'game/wishlist',{
			method:'GET',
			credentials: "include",
		})
		return new Promise((resolve, reject) => {
			response.json()
				.then(data=>{
					resolve(data.data)
				})
		})
	}

	beforeUpdate(async()=>{ //HTML이 mount 된후에 작동하는 code
		wishlistPromise = getServer();
	})
	onMount(async()=>{
		wishlistPromise.then(r=>{
			if(!r){
				alert('로그인이 필요합니다!')
				window.location.href='/'
			}
		})
	})
</script>

<h1>
    위시리스트
</h1>

<div class="library container mx-auto">
    <select bind:value={selected}>
        {#each sortOptions as option}
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
                    <Link to="/wishlist/selectedgame?id={Game.gameId}">
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
