<script lang="ts">
    import HomeGameCategory from "./homeGameCategory.svelte"
    import testGame from "../test/game.json"
</script>


<div>
     {#each testGame as category}
        <HomeGameCategory category="{category}"/>
     {/each}
</div>