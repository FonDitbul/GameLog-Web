<script lang="ts">
    import HomeGameCategory from "./homeGameCategory.svelte"
    import testGame from "../test/game.json"
    
    const categories = testGame.map((i)=>{
        const gameName = i.game.map((j)=>{return j.name})
        return i.type
    })
    
    
</script>


<div>
    <!-- {#each category as categories} -->
    <HomeGameCategory category={categories[0]}/>
    <HomeGameCategory category={categories[1]}/>
    <HomeGameCategory category={categories[2]}/>
    <HomeGameCategory category={categories[3]}/>
    <HomeGameCategory category={categories[4]}/>
    <HomeGameCategory category={categories[5]}/>
    <!-- {/each} -->
</div>