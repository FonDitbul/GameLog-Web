<script lang="ts">
	import {Link} from "svelte-navigator";

	let selected:string;
	let options = [
		{name:'aggregated_rating', 'text':'기관 점수 순'},
		{name:'name', 'text':'이름순'},
		{name:'first_relase_date', 'text':'출시일 순'},
		{name:'createdTime', 'text':'담은 날짜 순'},
	]
	import testGame from "../test/HomeGame.json"
	let tempLibgame = testGame[0]
</script>

<h1>라이브러리</h1>
<div class="library container mx-auto">
    <select bind:value={selected}>
        {#each options as option}
            <option value={option}>
                {option.text}
            </option>
        {/each}
    </select>
    <table class="library-table">
        {#each tempLibgame.game as Game}
            <td>
                <Link to="/gamedetail">
                    <div class="box">
                        <img src={Game.cover[0].url}>
                        <p>{Game.name}</p>
                    </div>
                </Link>
            </td>
        {/each}
    </table>
</div>

<style>

</style>