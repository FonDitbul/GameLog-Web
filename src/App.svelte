<script lang="ts">
	export let name: string;
	import Home from './navbarHome.svelte';
	let toggle = false;
</script>

<ul class="navbar">
	<l1><img src="//public/gamelog_favicon.png"></l1>
	<li><a href="/"> Home | </a></li>
	<li><a href="/Library"> Library | </a></li>
	<li><a href="/wishlist"> Wishlist | </a></li>
	<li><a href="/Search"> Serach | </a></li>

	<li><a href="/login"> login | </a></li>
	<li><a href="/signup"> register </a></li>
</ul>

<button on:click={()=> {toggle = !toggle}}>
	Toggle
</button>
{#if toggle}
	<h2> hi toggle! </h2>
{:else}
	<h2> no toggle </h2>
{/if}


<main>
	<h1>Hello {name}!</h1>	
	<Home/>
</main>



<style>
	main {
		/* text-align: center; */
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
	ul.navbar{
		list-style:none;
		margin:10;
		padding:0;
	}
	li{
		margin: 10;
		padding: 10;
		border : 10;
		float:left;
	}
</style>