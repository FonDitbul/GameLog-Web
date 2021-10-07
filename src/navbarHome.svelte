<script lang="ts">
    import HomeGameCategory from "./homeGameCategory.svelte"
    import testGame from "./test/game.json"
    
    const category = testGame.map((i)=>{
        const gameName = i.game.map((j)=>{return j.name})
        return i.type
    })
    
</script>


<div>
    <HomeGameCategory category={category[0]}/>
    <HomeGameCategory category={category[1]}/>
    <HomeGameCategory category={category[2]}/>
    <HomeGameCategory category={category[3]}/>
    <HomeGameCategory category={category[4]}/>
    <HomeGameCategory category={category[5]}/>
</div>