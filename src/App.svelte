<script lang="ts">
	export let name: string;
	import Home from './route/Home.svelte';

	import Library from './route/Library.svelte'
	import Wishlist from './route/Wishlist.svelte'
	import Search from './route/Search.svelte'

	import Signin from './route/Signin.svelte'
	import Signup from './route/Signup.svelte'
	import { onMount } from 'svelte'

	import { Router, Route, Link } from "svelte-navigator";

	onMount(()=>{ //HTML이 mount 된후에 작동하는 code

	})

</script>

<main>
	<h1>{name}!</h1>	
</main>


<Router>
	<nav>
		<Link to ="/">Home</Link>
		<Link to ="/library">Library</Link>
		<Link to ="/wishlist">WishList</Link>
		<Link to ="/search">Search</Link>

		<Link to ="/signin"> login</Link>
		<Link to ="/signup"> register </Link>
	</nav>
	<div>
		<Route path="/"><Home/></Route>
		<Route path="/library"><Library/></Route>
		<Route path="/wishlist"><Wishlist/></Route>
		<Route path="/search"><Search/></Route>

		<Route path="/signin"><Signin/></Route>
		<Route path="/signup"><Signup/></Route>
	</div>
</Router>

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

	nav{
		margin-left:40px;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>