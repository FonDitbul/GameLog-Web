import {writable, readable} from 'svelte/store'

//TODO URL, client URL Parameter 생성
export let storeName:any = writable('GameLog');
export let gameDetail:Object = writable({

})
export let user:Object = writable({

})

export const sortOptions:Array<Object> =
	[
		{sort:'aggregated_rating', type:'desc', text:'기관 점수 높은 순'},
		{sort:'aggregated_rating', type:'asc', 	text:'기관 점수 낮은 순'},
		{sort:'name', type:'desc',				text:'이름 순'},
		{sort:'name', type:'asc',				text:'이름 역 순'},
		{sort:'first_relase_date',type:'asc', 	text:'출시일 역 순'},
		{sort:'first_relase_date',type:'desc', 	text:'출시일 빠른 순'},
		{sort:'createdTime', type:'asc',		text:'담은 날짜 역 순'},
		{sort:'createdTime', type:'desc',		text:'담은 날짜 빠른 순'},
	]
