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
	let genresPromise;
	let themesPromise;
	beforeUpdate(async () => {
		genresPromise = getGenres();
		themesPromise = getThemes();
	})
</script>
<div>
    <div class="container">
        {#await genresPromise}
        {:then data}
            <!--            <h1>{data.message}</h1>-->
            {#each data.data as category}
                <button class="category"
                >
                    {category.name}
                </button>
            {/each}
        {/await}
        {#await themesPromise}
        {:then data}
            <!--            <h1>{data.message}</h1>-->
            {#each data.data as category}
                <button class="category"
                >
                    {category.name}
                </button>
            {/each}
        {/await}
        <button>제출하기</button>
    </div>
</div>


<style>
    div{
        position:absolute;
        left:50%;
    }
    .container{
        display: grid;
        grid-template-columns: repeat(5, 170px);
        grid-gap: 10px;
        grid-auto-rows: minmax(100px, auto);
    }
    .category{
        text-align: center;
        width:150px;
        height:150px;
        border: 1px solid #aaa;
        padding: 1em;
        margin: 0 0 1em 0;
        /*word-break:break-all;*/
    }
    .active {
        background-color: #9500ff;
        color: white;
    }
</style>