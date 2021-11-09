<script lang="ts">
	import {API_URL} from "../../envStore";
	import {beforeUpdate, onMount} from "svelte";

	async function getGenres(){
		const response = await fetch(API_URL+'initdata/genres',{
			method: 'GET',
			headers:{
				// 'Accept': 'application/json',
				'Content-Type':"application/json",
			},
			credentials: "include",
		})
		return response.json()
	}

	async function getThemes(){
		const response = await fetch(API_URL+'initdata/themes',{
			method: 'GET',
			headers:{
				// 'Accept': 'application/json',
				'Content-Type':"application/json",
			},
			credentials: "include",
		})
		return response.json()
	}
	let genres
	let themes;
	beforeUpdate(async () => {
		genres = getGenres();
		themes = getThemes();
		console.log(genres)
	})
</script>

<div>
    <div id="genres">
        {#await genres}
        {:then data}
            <h1>{data.message}</h1>
            {#each data.data as category}
                {category.name}
                <br>
            {/each}
        {/await}
    </div>
    <div id="themes">
        {#await themes}
        {:then data}
            <h1>{data.message}</h1>
            {#each data.data as category}
                {category.name}
                <br>
            {/each}
        {/await}
    </div>
</div>

<style>

</style>