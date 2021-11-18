<script lang="ts">
    import {statusOptions} from "../store";
	import {API_URL} from "../../envStore";
	import {beforeUpdate, onDestroy, onMount} from "svelte";
	import {useParams} from "svelte-navigator";

	export let UserGame;
	export let GAME;
    let selectedStatus; //선택된 default값
	let userRating:number;
    let userMemo:string = '';
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
	async function createUserGame({gameId, rating, memo, status}){
		const data = {
			gameId:gameId,
			userGameMemo:memo,
			userGameRating:rating,
			userGameStatus:status
		}
		const response = await fetch(API_URL + 'game/library', {
			method:'POST',
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
    onMount(async () =>{
		if(UserGame) {
			selectedStatus = UserGame.userGameStatus;
            if(UserGame.userGameRating) userRating = UserGame.userGameRating;
			if(UserGame.userGameMemo) userMemo = UserGame.userGameMemo;
		}
	})
    onDestroy(()=>{
		if(UserGame){
			const updateGame={
				id:UserGame.id,
				memo:userMemo,
				rating:userRating,
				status:selectedStatus
			}
			updateUserGame(updateGame)
        }else if(!UserGame && selectedStatus){
			const createGame={
				gameId:GAME.id,
				rating:userRating,
				memo:userMemo,
				status:selectedStatus
			}
			createUserGame(createGame)
        }
    })
</script>

{#if UserGame}
    <div>
        <h3>유저 평점! {userRating}</h3>
        <input type=range bind:value={userRating} min="0" max="5" step="0.5">
        <h3>유저리뷰 : </h3>
        <textarea class='review'  wrap="virtual"bind:value={userMemo} placeholder="유저 리뷰"/>
        {#if UserGame.userGameStatus}
            <h3>상태값</h3>
            <select bind:value={selectedStatus}
                    on:change={async ()=> {
                        const updateGame={
                            id:UserGame.id,
                            memo:userMemo,
                            rating:userRating,
                            status:selectedStatus
                        }
                await updateUserGame(updateGame)
                location.reload()
            }}>
                {#each statusOptions as option}
                        <option value={option.value}>
                            {option.text}
                        </option>
                {/each}
            </select>
        {/if}
    </div>
{:else }
    <div>
        <h3>유저 평점! {userRating}</h3>
        <input type=range bind:value={userRating} min="0" max="5" step="0.5">
        <h3>유저리뷰 : </h3>
        <textarea class='review' wrap="virtual" bind:value={userMemo} placeholder="유저 리뷰"/>
        <h3>상태값</h3>
        <select bind:value={selectedStatus}
                on:change={async ()=> {
                        const createGame={
                            gameId:GAME.id,
                            rating:userRating,
                            memo:userMemo,
                            status:selectedStatus
                        }
                await createUserGame(createGame)
                location.reload()
                }}>
            <option value="none">=== 선택 ===</option>
            {#each statusOptions as option}
                <option value={option.value}>
                    {option.text}
                </option>
            {/each}
        </select>
    </div>
{/if}

<style>
    .review{
        width:100%;
        height: 400px;
        text-overflow: inherit;
    }
</style>
