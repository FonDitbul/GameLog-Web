<script lang="ts">
	import {unixTimestamp} from "../util";
    export let UserGame;

</script>

<div>
    <h3>유저 평점 : {UserGame.userGameRating}</h3>
    <h3>유저 리뷰 : {UserGame.userGameMemo}</h3>
    <h3>상태값 : {UserGame.userGameStatus}</h3>
</div>

