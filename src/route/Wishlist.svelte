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

<div class="library">
    <select bind:value={selected}>
        {#each options as option}
            <option value={option}>
                {option.text}
            </option>
        {/each}
    </select>
    <ul>
        {#each tempLibgame.game as Game}
            <Link to="/gamedetail">
                <div class="static">
                    <li class="box">
                        <img src={Game.cover[0].url}>
                        <p>{Game.name}</p>
                    </li>
                </div>
            </Link>
        {/each}
    </ul>
</div>

<style>
    .box {
        width: 300px;
        border: 1px solid #aaa;
        border-radius: 2px;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        padding: 1em;
        margin: 0 0 1em 0;
    }
</style>
