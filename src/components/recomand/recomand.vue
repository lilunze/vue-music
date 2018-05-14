<template>
	<div>
		<carousel />
		<sublist />
		<recommend />
		<selection />
	</div>
</template>
<script>
	import carousel from '@/components/carousel/carousel'
	import sublist from '@/components/sublist/sublist'
	import recommend from '@/components/recommend/recommend'
	import selection from '@/components/selection/selection'
	export default {
		components:{
			carousel,
			sublist,
			recommend,
			selection
		}
	}
</script>
<style scope>
	
</style>