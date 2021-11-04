<script lang="ts">
	// import { game } from "../test/gameDetail"
	import {API_URL} from "../envStore";
	import {beforeUpdate} from "svelte";
	const gameId:number = Number(location.search.split('?id=')[1])
	async function getSelectedGame(id){
		const response = await fetch(API_URL+'select?gameId='+gameId,{
			method:'GET',
		})
		return response.json();
	}
	let gamePromise;
	beforeUpdate(async () => {
		gamePromise = getSelectedGame(gameId);
	})
</script>

<div class="game">
    {#await gamePromise}
    {:then Game}
        <div>
            <h3>게임이름 : {Game.gameDetail.name}</h3>
            <h3>게임 포스터 </h3>
            <img src={Game.gameDetail.cover[0].url}>

            <h3>기관 평점 : {Game.gameDetail.aggregated_rating}</h3>
            <h3>기관 평가 수 : {Game.gameDetail.aggregated_rating_count}</h3>

            <h3>게임 카테고리 : {Game.gameDetail.category}</h3>
            <div>
                <h3>게임 모드 :
                    {#each Game.gameDetail.game_modes as game_mode}
                        {game_mode.name} &nbsp;&nbsp;
                    {/each}
                </h3>
            </div>
            <div>
                <h3>게임 장르 :
                {#each Game.gameDetail.genres as genre}
                    {genre.name} &nbsp;&nbsp;
                {/each}
                </h3>
            </div>
            <div>
                <h3>게임 테마 :
                    {#each Game.gameDetail.themes as theme}
                        {theme.name} &nbsp;&nbsp;
                    {/each}
                </h3>
            </div>
            <div>
                <h3>게임 플랫폼 :
                    {#each Game.gameDetail.platforms as platform}
                        {platform.name} &nbsp;&nbsp;
                    {/each}
                </h3>
            </div>
            <div>
                <h3>연관 기업 :
                    {#each Game.gameDetail.involved_companies as company}
                        {company.company[0].name} &nbsp;&nbsp;
                    {/each}
                </h3>
            </div>

            <h3>출시일 : {Game.gameDetail.first_release_date}</h3>
            <h3>인게임 스크린샷 </h3>
            <div class="screenshot">
                {#each Game.gameDetail.screenshots as screenshot}
                    <img src={screenshot.url}>
                {/each}
            </div>

            <h3>게임 스토리 : {Game.gameDetail.storyline}</h3>
            <h3>게임 요약 : {Game.gameDetail.summary}</h3>
        </div>
        <hr>
        {#if Game.userGame}
            <div>
                <h3>유저 평점 : {Game.userGame.userGameRating}</h3>
                <h3>유저 리뷰 : {Game.userGame.userGameMemo}</h3>
                <h3>상태값 : {Game.userGame.userGameStatus}</h3>
            </div>
        {/if}
    {:catch error}
        <p>{error}</p>
    {/await}
</div>


<style>
    .game{
        float: left;
    }
</style>