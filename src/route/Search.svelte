<script>
    import {API_URL} from "../envStore";
    let searchText = ''
    async function searchGame (gameName) {
        const searchURL = `?name=${gameName}`;
        const response = await fetch(API_URL + 'search' + searchURL, {
            method: 'GET',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': "application/json",
            },
        })
        return response.json();
    }
    const onKeyPress = e => {
        if (e.charCode === 13) {
            searchGame(searchText)
                .then(res=>{
                    console.log(res)
                })
        }
    }
</script>

<h1>게임 검색</h1>
<div class="search">
    <input type="text"
           value={searchText}
           on:keypress={onKeyPress}
           on:input={(e) => {
                searchText = e.target.value
            searchGame(e.target.value)
        .then(res=>{
            console.log(res)
        })
            }} />

<!--    <button on:click={() => {-->
<!--        searchGame(searchText)-->
<!--        .then(res=>{-->
<!--            console.log(res)-->
<!--        })-->
<!--    }}>-->
<!--        검색-->
<!--    </button>-->
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