<script lang="ts">
    let text:string = '';
</script>

<div class="center">
    <h4> 로그인 </h4>
    <div>
        <input type="text"
        value={text}
        on:input={(e) => {text = e.target.value}} 
        placeholder="email"/>
    </div>
    
    <div>
        <input type="password"
        placeholder="password"/>
    </div>
    
    <button on:click={() => {}}>
        로그인
    </button>
    <button on:click={() => {}}>
        회원가입
    </button>
</div>


<style>
    .center{
        text-align: center;
    }
</style>
