<script lang="ts">
    let text:string = '';
</script>

<div class="center">
    <div>
        <!-- <h4>email</h4> -->
        <input type="text"
        value={text}
        on:input={(e) => {text = e.target.value}} 
        placeholder="email"/>
    </div>
    
    <div>
        <!-- <h4>nickname</h4> -->
        <input type="text"
        placeholder="nickname"/>
    </div>
    
    
    <div>
        <!-- <h4>password</h4> -->
        <input type="password"
        placeholder="password"/>
    </div>
    
    <div>
        <!-- <h4>password confirm</h4> -->
        <input type="password"
        placeholder="password confirm"/>
    </div>
    
    
    <button on:click={() => {}}>
        SIGN UP!
    </button>
</div>

<style>
    .center{
        text-align: center;
    }
</style>