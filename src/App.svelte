<script lang="ts">
	export let name: string;
	import Home from './route/Home.svelte';

	import Library from './route/Library.svelte'
	import Wishlist from './route/Wishlist.svelte'
	import Search from './route/Search.svelte'

	import Signin from './route/Signin.svelte'
	import Signup from './route/Signup.svelte'
	import GameDetail from "./route/GameDetail.svelte";

	import { onMount } from 'svelte'

	import { Router, Route, Link } from "svelte-navigator";

	onMount(()=>{ //HTML이 mount 된후에 작동하는 code

	})

	import {serverURL} from "./envStore";

	export let user:Object;
	user = {
		id:0,
		email:"test@gmail.com",
		name:"test",
		login:true,
	}
</script>

<main class="absolute">
	<h1>{name}!</h1>
	<Router>
		<nav>
			<Link to ="/">Home</Link>
			<Link to ="/library">Library</Link>
			<Link to ="/wishlist">WishList</Link>
			<Link to ="/search">Search</Link>
			{#if user.login}
				<Link to ="/signin"> 로그인</Link>
				<Link to ="/signup"> 회원가입 </Link>
			{:else}
				<Link to ="/user">{user.name}</Link>
				<Link to ="/logout"> 로그아웃 </Link>
			{/if}
		</nav>
		<div>
			<Route path="/"><Home/></Route>
			<Route path="/library"><Library/></Route>
			<Route path="/wishlist"><Wishlist/></Route>
			<Route path="/search"><Search/></Route>

			<Route path="/signin"><Signin/></Route>
			<Route path="/signup"><Signup/></Route>
			<Route path="/gamedetail"><GameDetail/></Route>
		</div>
	</Router>
</main>

<style>
	main {
		/* text-align: center; */
		/*padding: 1em;*/
		/*max-width: 240px;*/
		/*margin: 0 auto;*/
	}

	h1 {
		color: #9500ff;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	a{
		margin :10px 10px 10px 10px;
	}
	nav{
		margin: 10px 10px 10px 30px;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>