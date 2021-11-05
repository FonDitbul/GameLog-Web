<script lang="ts">
	import {API_URL} from "../envStore";
	import {beforeUpdate, onMount} from "svelte";

	let userProfile:object;
	let profilePromise;
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
	beforeUpdate(async()=>{
		profilePromise = getUser()
        profilePromise.then(r=>{console.log(r)})
	})
</script>

<div>
    {#await profilePromise}
    {:then profile}
        <h2>유저 email : {profile.data.email}</h2>
        <h2>유저 닉네임 : {profile.data.nickname}</h2>
        <h3>게임 선호 장르 :
            {#each profile.data.preferCategory as category}
                <br>
                category : {category.category}
                <br>
                이름 : {category.name}
                <br>
            {/each}
        </h3>
        <br>
        <h2>유저 프로필 이미지 : {profile.data.nickname}</h2>
        <img src={API_URL + profile.data.profileImage.url} width="150px" height="150px">
    {:catch error}
        <h1>{error}</h1>
    {/await}
</div>