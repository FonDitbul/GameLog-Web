<script lang="ts">
	export let UserGame;
	let userRating;
</script>

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
    <h3>상태값 : {UserGame.userGameStatus}</h3>
</div>

