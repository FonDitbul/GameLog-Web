<script lang="ts">
    import testGame from "../test/game.json";
    export let category:string;
    let gameList = [];
    testGame.map((i)=>{
        if(i.type === category){
            i.game.map((j)=>{
                gameList.push(j)
            })
        }
    })
    console.log(gameList)
    import Image from './imagetest.svelte';

</script>


<div>
    {category}
    <ul>
        {#each gameList as game}
            <li>
                <p>{game.name}</p>
                <Image src={game.cover}/>
            </li>
        {/each}
    </ul>
</div>

<style>

</style>