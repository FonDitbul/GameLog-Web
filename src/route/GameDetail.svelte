<script lang="ts">
	import { game } from "../test/gameDetail"
</script>

<div class="game">
    <div>
        <h1>게임이름 : {game.gameDetail.name}</h1>
        <h1>game.cover 커버 사진</h1>
        <h1>기관 평점 : {game.gameDetail.aggregated_rating}</h1>
        <h1>기관 평가 수 : {game.gameDetail.aggregated_rating_count}</h1>

        <h1>게임 카테고리 : {game.gameDetail.category}</h1>
        <h1>게임 장르 : {game.gameDetail.genres[0].name}</h1>
        <h1>게임 테마 : {game.gameDetail.themes[0].name}</h1>
        <h1>게임 플랫폼 : {game.gameDetail.platforms[0].name}</h1>


        <h1>출시일 : {game.gameDetail.first_release_date}</h1>
        <h1>연관 기업 : {game.gameDetail.involved_companies[0].company[0].name}</h1>

        <h1>game.screenshots 인게임 샷</h1>
        <h1>게임 스토리 : {game.gameDetail.storyline}</h1>
        <h1>게임 요약 : {game.gameDetail.summary}</h1>
    </div>
    <hr>
    <div>
        <h1>유저 평점 : {game.userGame.userGameRating}</h1>
        <h1>유저 리뷰 : {game.userGame.userGameMemo}</h1>
        <h1>상태값 : {game.userGame.userGameStatus}</h1>
    </div>
</div>


<style>
    h1{
        margin:5px;
        width:300px;
    }
    .game{
        float: left;
    }
</style>