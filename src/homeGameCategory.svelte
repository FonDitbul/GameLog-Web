<script lang="ts">
    import HomeGameList from "./homeGameList.svelte";
    export let category:string;

    import testGame from "./response.json"
    console.log(testGame)
    let gameList = [];

    testGame.map((i)=>{
        if(i.type === category){
            i.game.map((j)=>{gameList.push(j.name)})
        }
    })
    console.log(gameList)

    // interface cover{
    //     id:number,
    //     game:number,
    //     height:number,
    //     width:number,
    //     url:string
    // }

    // let id:number;
    // let name:string;
    // let cover:cover;
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