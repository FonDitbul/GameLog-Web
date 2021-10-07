<script lang="ts">
    export let category:string;

    import testGame from "./test/game.json"
    console.log(testGame)
    let gameList = [];

    testGame.map((i)=>{
        if(i.type === category){
            i.game.map((j)=>{gameList.push(j.name)})
        }
    })
    console.log(gameList)
</script>

<div>
    {category}
    <ul>
        {#each gameList as game}
            <li>
                <p>{game}</p>
            </li>
        {/each}
    </ul>
</div>