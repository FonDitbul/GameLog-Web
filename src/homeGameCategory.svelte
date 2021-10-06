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
</script>

<div>
    {category}
    <ul>
        <HomeGameList name = {gameList[0]}/>
        <HomeGameList name = {gameList[1]}/>
        <HomeGameList name = {gameList[2]}/>
        <HomeGameList name = {gameList[3]}/>
        <HomeGameList name = {gameList[4]}/>
        <HomeGameList name = {gameList[5]}/>
        <HomeGameList name = {gameList[6]}/>
        <HomeGameList name = {gameList[7]}/>
        <HomeGameList name = {gameList[8]}/>
        <HomeGameList name = {gameList[9]}/>
    </ul>
</div>