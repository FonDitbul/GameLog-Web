<script lang="ts">
    export let UserGame;
    let userRating;
</script>

<div>
    <h3>유저 평점 : {UserGame.userGameRating}</h3>
    <input type=range bind:value={userRating}>
    <h3>유저 리뷰 : {UserGame.userGameMemo}</h3>
    <h3>상태값 : {UserGame.userGameStatus}</h3>
</div>

