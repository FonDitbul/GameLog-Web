<script lang="ts">
    import { API_URL } from "../envStore";
    // import fetchSession from "fetch-session";

	let signinEmail: string = '';
	let signinPassword: string = '';
	async function signInSubmit(email, password) {
		const data = {
			email:email,
			password:password
		}
		const response = await fetch(API_URL + 'auth/login', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': "application/json",
				'Cache': 'no-cache'
			},
			credentials: "include",
			body: JSON.stringify(
				data
			),
		})
        console.log(response)
        return response.json();
	}
</script>

<div class="center">
    <h4> 로그인 </h4>
    <div>
        <input type="text"
            value={signinEmail}
            on:input={(e) => {signinEmail = e.target.value}}
            placeholder="email"/>
    </div>
    
    <div>
        <input type="password"
               value={signinPassword}
               on:input={(e) => {signinPassword = e.target.value}}
               placeholder="password"/>
    </div>
    
    <button on:click={() => {
        signInSubmit(signinEmail, signinPassword)
        .then(res=>{
            if(res.user){
                alert(res.message)
                window.location.href='/'
            }else{
                alert(res.message);
            }
        });
    }}>
        로그인
    </button>
    <button on:click={() => {
        window.location.href='/signup'
    }}>
        회원가입
    </button>
</div>


<style>
</style>
