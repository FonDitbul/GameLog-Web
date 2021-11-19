<script lang="ts">
    export let name:string;
	export let category;
	export let selectedCategory;
    let toggle:boolean = false;
    function cateogrySelect(array, item){
		if(!toggle){
			array.push(item)
			console.log('selected', item)
        }else{
			const index = array.findIndex(function(elem){
				return elem.id === item.id;
            })
			array.splice(index,1)
        }
		toggle = !toggle;
    }
</script>

<button on:click={()=>{cateogrySelect(selectedCategory, category)}} class:active="{toggle}">
    {name}
</button>

<style>
    button{
        height: 8rem;
        width: 8rem;
        background-color: #ffffff;
        border-color: #9500ff;
        color: #9500ff;
        font-size: 1.25rem;
        background-image: linear-gradient(45deg, #9500ff 50%, transparent 50%);
        background-position: 100%;
        background-size: 400%;
        transition: background 300ms ease-in-out;
    }
    button:hover {
        background-position: 0;
        color: #ffffff;
    }
    .active{
        color: #ffffff;
        background: #9500ff;
    }
</style>