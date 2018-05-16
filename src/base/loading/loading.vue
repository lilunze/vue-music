<template>
	<div class="loading">
		<p><img src="./loading.gif" alt=""></p>
	</div>
</template>
<script>
	export default {
		props:{
			desc:{
				type:String,
				default:'正在加载'
			}
		}
	}
</script>
<style scoped>
	.loading
	{
		width: 100%;
		text-align: center;
	}
	.loading img
	{
		width: 320px;
	}
      
</style>