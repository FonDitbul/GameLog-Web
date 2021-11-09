<script lang="ts">
	import {Link} from "svelte-navigator";

	let selected;
	let options = [
		{value:'aggregated_rating', 'text':'기관 점수 순', type:'asc'},
		{value:'name', 'text':'이름순', type:'asc'},
		{value:'first_relase_date', 'text':'출시일 순', type:'asc'},
		{value:'createdTime', 'text':'담은 날짜 순', type:'asc'},
	]
	import {API_URL} from "../../envStore";
	import {beforeUpdate, onMount} from "svelte";

	let wishlistPromise;
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
