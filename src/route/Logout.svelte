<script lang="ts">
	import {API_URL} from "../envStore";
	import {beforeUpdate} from "svelte";

	async function logout(){
		const response = await fetch(API_URL+'auth/logout',{
			method: 'POST',
			headers:{
				// 'Accept': 'application/json',
				'Content-Type':"application/json",
			},
			credentials: "include",
		})
		return response.json()
	}

	beforeUpdate(async () =>{
        logout().then(r=>{
			alert(r.message)
			window.location.href='/'
        });
    })
</script>