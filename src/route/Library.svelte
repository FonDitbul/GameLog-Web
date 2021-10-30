<script lang="ts">
	let selected:string;
	let options = [
		{name:'aggregated_rating', 'text':'기관 점수 순'},
		{name:'name', 'text':'이름순'},
		{name:'first_relase_date', 'text':'출시일 순'},
		{name:'createdTime', 'text':'담은 날짜 순'},
	]
</script>

<div class="library">
    <select bind:value={selected}>
        {#each options as option}
            <option value={option}>
                {option.text}
            </option>
        {/each}
    </select>


</div>