<script lang="ts">
    import testGame from "../test/game.json";

    import Image from './imagetest.svelte';

    export let category:string;
    let gameList = [];
    testGame.map((i)=>{
        if(i.type === category){
            i.game.map((j)=>{
                gameList.push(j)
            })
        }
    })
    

</script>


<div class='category'>
    {category}
    <ul>
        {#each gameList as game}
            <li>
                <p>{game.name}</p>
                <Image cover={game.cover}/>
            </li>
        {/each}
    </ul>
</div>

<style>
    div.category{
        position:relative;
    }
    ul{
        float:left;
        text-align: center;
        padding: 1em;
        list-style: none;
        margin-left: 10px;
    }
</style>