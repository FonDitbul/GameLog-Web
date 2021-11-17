<script lang="ts">
    import {statusOptions} from "../store";
	import {API_URL} from "../../envStore";

	export let UserGame;
	export let selectedStatus; //UserGame.userGameStatus 변수
	let userRating = 4;

	async function updateUserGame({id, rating, memo, status}){
        const data = {
			id:id,
			userGameMemo:memo,
            userGameRating:rating,
			userGameStatus:status
        }
		const response = await fetch(API_URL + 'game/library', {
			method:'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': "application/json",
				'Cache': 'no-cache'
			},
            body:JSON.stringify(data),
			credentials: "include",
		})
		return new Promise((resolve, reject) => {
			response.json()
				.then(data=>{
					resolve(data.data)
				})
		})
	}

</script>

{#if UserGame}
    <div>
        <h3>유저 평점 :
            {#if UserGame.userGameRating}
                {UserGame.userGameRating}
            {:else}
                0
            {/if}
        </h3>
        {#if userRating}
            <input type=range bind:value={userRating}>
        {:else}
            <input type=range>
        {/if}
        <h3>유저 리뷰 :
            {#if UserGame.userGameMemo}
                {UserGame.userGameMemo}
            {:else}
                리뷰를 입력해주세요 !
            {/if}
        </h3>
        {#if UserGame.userGameStatus}
            <h3>상태값 : {UserGame.userGameStatus}</h3>
            <select bind:value={selectedStatus}
                    on:change={async ()=> {
                        const updateGame={
                            id:UserGame.id,
                            status:selectedStatus.value
                        }
                await updateUserGame(updateGame)
                location.reload()
            }}>
                {#each statusOptions as option}
                    <option value={option}>
                            {option.text}
                    </option>
                {/each}
            </select>
        {/if}
    </div>
{:else }
    <div>
        유저 평점!
        <input type=range>
    </div>
{/if}



