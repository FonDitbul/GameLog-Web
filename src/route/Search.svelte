<script>
    let text = ''
</script>

<h1>게임 검색</h1>
<div class="search">
    <input type="text"
            value={text}
            on:input={(e) => {text = e.target.value}} />
    
    <button on:click={() => {console.log('search', text)}}>
        검색
    </button>
</div>

<style>
    .search{
        /*display: flex;*/
        margin:auto;
        /*float: left;*/
    }
    input{
        width:500px;
        margin: 30px 10px 20px 10px;
    }
    button{
        margin: 10px;
    }
</style>