<script lang="ts">
    interface cover{
        id:number,
        game:number,
        height:number,
        width:number,
        url:string
    }

    export let id:number;
    export let name:string;
    export let cover:cover;
</script>


<li>
    {name}
</li>