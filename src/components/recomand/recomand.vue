<template>
	<div class="recommend">
		<bscroll :data="recommendList" class="recommend-content">
			<div>
				<carousel />
				<sublist />
				<recommend :list="recommendList" />
				<selection :list="selectionList" />
			</div>	
		</bscroll>
	</div>
</template>
<script>
	import bscroll from '@/base/scroll/scroll'
	import carousel from '@/components/carousel/carousel'
	import sublist from '@/components/sublist/sublist'
	import recommend from '@/components/recommend/recommend'
	import selection from '@/components/selection/selection'
	import axios from 'axios';
	import qs from 'qs';
	export default {
		components:{
			bscroll,
			carousel,
			sublist,
			recommend,
			selection
		},
		data:function(){
			return {
				recommendList:[],
				selectionList:[]
			}
		},
		created:function(){
			this._getRecommend()
			this._getSelection()
		},
		methods:{
			_getRecommend:function(){
				var _this=this;
				axios
				.post('https://yumsunsportwear.com/self/echo/index.php',qs.stringify({'url':"http://www.app-echo.com/api/recommend/sound-day?limit=6&page=1"}))
				.then(function(res){
					_this.recommendList=res.data.list;
				})
				.catch(function(err){
					console.log(err)
				})
			},
			_getSelection:function(){
				var _this=this;
				axios
				.post('https://yumsunsportwear.com/self/echo/index.php',qs.stringify({'url':"http://www.app-echo.com/api/other/index"}))
				.then(function(res){
					_this.selectionList=res.data.hot_recommend;
				})
				.catch(function(err){
					console.log(err)
				})
			}
		}

	}
</script>
<style scope>
	.recommend
	{
		position: fixed;
    	width: 100%;
    	top: 90px;
    	bottom: 0;
	}
	.recommend-content
	{
		height: 100%;
      	overflow: hidden;
	}
</style>