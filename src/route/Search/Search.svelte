<script>
    import {API_URL} from "../../envStore";
    import {Link} from "svelte-navigator";
    import { fade } from 'svelte/transition';


    let searchText = ''
    let searchedGame = [];
    async function searchGame (gameName) {
        const searchURL = `?name=${gameName}`;
        const response = await fetch(API_URL + 'search' + searchURL, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
            },
        })
        return response.json();
    }
    const onKeyPress = e => {
        if (e.charCode === 13) {
            searchGame(searchText)
                .then(res=>{
                    searchedGame = []
                    searchedGame = searchedGame.concat(res.data.gameName, res.data.alterName)
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
            searchedGame = []
            searchedGame = searchedGame.concat(res.data.gameName, res.data.alterName)
        })
            }} />
    {#if searchedGame}
        {#each searchedGame as Game}
            <td>
                <Link to="/selectedgame?id={Game.id}">
                    <div class="box" transition:fade>
                        <img src={Game.cover[0].url}>
                        <p>{Game.name}</p>
                    </div>
                </Link>
            </td>
        {/each}
    {/if}
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