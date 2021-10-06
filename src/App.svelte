<script lang="ts">
	export let name: string;
	import Home from './home.svelte';
</script>


<main>
	<h1>Hello {name}!</h1>	
	<Home num={42}/>
</main>



<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>