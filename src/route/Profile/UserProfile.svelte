<script lang="ts">
	import {API_URL} from "../../envStore";
	import {beforeUpdate, onMount} from "svelte";
	import ProfileCard from "./ProfileCard.svelte";

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
	})
</script>

<div>
    {#await profilePromise}
    {:then profile}
        <img src={API_URL + profile.data.profileImage.url} width="100px" height="100px">
        <ProfileCard>
        <span slot="name">
		    {profile.data.nickname}
	    </span>

            <slot slot="email">
                <span>{profile.data.email}</span>
            </slot>

            <span slot="game">
		    <h3 on:click={()=>{window.location.href='/userprefer'}}>선호 장르 :
                {#each profile.data.preferCategory as category}
                <br>
                category : {category.category}
                    <br>
                이름 : {category.name}
                    <br>
            {/each}
        </h3>
        <br>
	    </span>
        </ProfileCard>

    {:catch error}
        <h1>{error}</h1>
    {/await}
</div>



<style>
    div{
    }
</style>
