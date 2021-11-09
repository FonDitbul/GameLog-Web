<script lang="ts">
	import {API_URL} from "../../envStore";

	let signupEmail:string = '';
	let emailMessage:string = '';
	let signupNickname: string = '';
	let nicknameMessage:string = '';
	let signupPassword: string = '';
	let signupPasswordConfirm: string = '';;

	async function signUpSubmit(email, nickname, password, passwordConfirm){
		const data = {
			email:email,
			nickname:nickname,
			password:password,
			passwordConfirm:passwordConfirm
		}
		const response = await fetch(API_URL + 'auth/signup', {
			method: 'POST',
			headers: {
				// 'Accept': 'application/json',
				'Content-Type': "application/json",
			},
			body: JSON.stringify(
				data
			),
		})
		return response.json();
	}
	async function validEmail(email){
		const validURL = 'auth/validation/email?value=' + email
		const response = await fetch(API_URL + validURL, {
			method:'GET',
		})
		return response.json()
    }
	async function validNickname(nickname){
		const validURL = 'auth/validation/nickname?value=' + nickname
		const response = await fetch(API_URL + validURL, {
			method:'GET',
		})
		return response.json()
    }

</script>

<div class="center">
    <h2>회원가입</h2>
    <div>
        <input type="text"
               value={signupEmail}
               on:input={(e) => {
                   signupEmail = e.target.value
                   validEmail(signupEmail)
                   .then(res=>{
                       emailMessage = res.message
                   })
               }}
               placeholder="email"/>
    </div>
    {emailMessage}
    <div>
        <input type="text"
               value={signupNickname}
               on:input={(e) => {
                   signupNickname = e.target.value
                   validNickname(signupNickname)
                   .then(res=>{
                       nicknameMessage = res.message
                   })
               }}
               placeholder="nickname"/>
    </div>
    {nicknameMessage}
    <div>
        <input type="password"
               value={signupPassword}
               on:input={(e) => {signupPassword = e.target.value}}
               placeholder="password"/>
    </div>
    <div>
        <input type="password"
               value={signupPasswordConfirm}
               on:input={(e) => {signupPasswordConfirm = e.target.value}}
               placeholder="password confirm"/>
    </div>

    <button
            on:click={() => {
              signUpSubmit(signupEmail, signupNickname, signupPassword, signupPasswordConfirm)
              .then(res=>{
                  if(res.status === 200){
                      alert(res.message)
                      window.location.href='/signin'
                  }else{
                      alert(res.message);
                  }
              })
          }}>
        회원가입
    </button>
</div>

<style>
    .center{
        /*display:;*/
        justify-content: center;
        align-items:center;
    }
</style>