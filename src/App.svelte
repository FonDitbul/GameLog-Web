<script lang="ts">
	import { beforeUpdate, onMount } from 'svelte'
	import { Router, Route, Link } from "svelte-navigator";

	import Home from './route/Home.svelte';
	import Library from './route/Library.svelte'
	import Wishlist from './route/Wishlist.svelte'
	import Search from './route/Search.svelte'
	import Signin from './route/Signin.svelte'
	import Signup from './route/Signup.svelte'
	import GameDetail from "./route/GameDetail.svelte";
	import UserProfile from "./route/UserProfile.svelte";

	import {API_URL} from "./envStore";


	export let name: string;

	let user: Object;
	let isLogin:boolean = false;
	async function getUser(){
		const response = await fetch(API_URL+'profile',{
			method: 'GET',
			headers:{
				// 'Accept': 'application/json',
				'Content-Type':"application/json",
			},
			credentials: "include",
		})
		return response.json()
	}
	onMount(async ()=>{ //HTML이 mount 된후에 작동하는 code
		const response = getUser()
		response.then(res=>{
			user = res.data
			isLogin = true;
		})
	})
</script>

<main class="absolute">
	<h1>{name}!</h1>
	<Router>
		<nav>
			<Link to ="/">Home</Link>
			<Link to ="/library">Library</Link>
			<Link to ="/wishlist">WishList</Link>
			<Link to ="/search">Search</Link>
			{#if isLogin}
				<Link to ="/profile?user={user.nickname}">{user.nickname}</Link>
				<Link to ="/logout"> 로그아웃 </Link>
			{:else}
				<Link to ="/signin"> 로그인</Link>
				<Link to ="/signup"> 회원가입 </Link>
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
			<Route path="/profile"><UserProfile/></Route>
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