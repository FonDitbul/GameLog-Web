<script lang="ts">
	import {API_URL} from "../../envStore";
	import {beforeUpdate, onMount} from "svelte";
	import PreferButton from "./preferButton.svelte";

	let genresPromise;
	let themesPromise;
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
	let selectedCategory = [];
    async function submitCategory(data) {
		const prefer = {
			prefer:data
        }
		const response = await fetch(API_URL+'profile/category',{
			method: 'PUT',
			headers:{
				// 'Accept': 'application/json',
				'Content-Type':"application/json",
			},
            body:JSON.stringify(prefer),
			credentials: "include",
		})
		return response.json()
    }
	beforeUpdate(async () => {
		genresPromise = getGenres();
		themesPromise = getThemes();
	})
</script>
<div>
    <div class="container">
        {#await genresPromise}
        {:then data}
            {#each data.data as category}
                <PreferButton name={category.name} category={category} selectedCategory={selectedCategory}/>
            {/each}
        {/await}
        {#await themesPromise}
        {:then data}
            {#each data.data as category}
                <PreferButton name={category.name} category={category} selectedCategory={selectedCategory}/>
            {/each}
        {/await}
        <button on:click={async ()=>{
            const response = await submitCategory(selectedCategory)
            if(response.status === 200){
                alert('카테고리 수정 성공!')
                window.location.href='/'
            }else if(response.status === 400){alert(response.message)}
            else{alert('잘못된 접근입니다.')}
        }}>제출하기</button>
    </div>
</div>


<style>
    div{
        position:absolute;
        /*left:50%;*/
    }
    .container{
        display: grid;
        grid-template-columns: repeat(5, 170px);
        grid-gap: 10px;
        grid-auto-rows: minmax(100px, auto);
    }
    button{
        height: 8rem;
        width: 8rem;
        background-color: #ffffff;
        border-color: #9500ff;
        color: #9500ff;
        font-size: 1.25rem;
        background-image: linear-gradient(45deg, #9500ff 50%, transparent 50%);
        background-position: 100%;
        background-size: 400%;
        transition: background 300ms ease-in-out;
    }
    button:hover {
        background-position: 0;
        color: #ffffff;
    }
</style>