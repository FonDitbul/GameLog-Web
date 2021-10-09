<script>
    export let cover

    let visible = true;
</script>

{#if visible}
    <img src={cover[0].url}>
{/if}