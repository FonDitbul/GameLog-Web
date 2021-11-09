<script lang="ts">
	import {Link} from "svelte-navigator";
	import {API_URL} from "../../envStore";
	import {beforeUpdate, onMount} from "svelte";
	import {sortOptions} from "../store";

	let selectedLibOptions
	if(!selectedLibOptions) selectedLibOptions = sortOptions[0]
    let libraryParams:string = `/?sort=${selectedLibOptions.sort}&sorttype=${selectedLibOptions.type}`
	let libraryPromise;

	async function getServer(params:string){
		const response = await fetch(API_URL + 'game/library' + params,{
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
		libraryPromise = getServer(libraryParams);

	})
    onMount(async()=>{
		libraryPromise.then(r=>{
			if(!r){
				alert('로그인이 필요합니다!')
				window.location.href='/'
            }
        })
    })
</script>

<h1>라이브러리</h1>
<div class="library container mx-auto">
    <select bind:value={selectedLibOptions}
            on:change={()=>{document.location.reload();}}>
        {#each sortOptions as option}
            <option value={option}>
                {option.text}
            </option>
        {/each}
    </select>
    <table class="library-table">
        {#await libraryPromise}
        {:then libraryGame}
            {#each libraryGame as Game}
                <td>
                    <Link to="/selectedgame?id={Game.gameId}">
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