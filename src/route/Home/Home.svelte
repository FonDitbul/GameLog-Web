
<script lang="ts">
	import HomeGameCategory from "./homeGameCategory.svelte"
	import testGame from "../../test/HomeGame.json"
	import { API_URL } from "../../envStore";

	let promise;
	async function getServer(){
		const response = await fetch(API_URL,{
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

	import {beforeUpdate, onMount} from 'svelte'
	beforeUpdate(async()=>{ //HTML이 mount 된후에 작동하는 code
		promise = getServer();
	})

</script>

<div>
    {#await promise}
    {:then Games}
        {#each Games as category}
            <HomeGameCategory category="{category}"/>
        {/each}
    {:catch error}
        <p>{error}</p>
    {/await}
</div>