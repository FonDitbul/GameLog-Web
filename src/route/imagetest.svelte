<script>
    let image = null;
    let tempSrc = "//igdb/image/upload/t_thumb/co2fca.jpg";

    export let src

    let visible = true;
</script>

{#if visible}
    <img src={src[0].url}>
{/if}