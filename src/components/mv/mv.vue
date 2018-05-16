<template>
	<div class="bs-wrap">
		<bscroll class="bs" :data="list">
			<ul class="daily-rank">
				<li v-for="item in list">
					<a :href="'/sound/'+item.id" class="cover"><img v-lazy="item.cover_url_260"></a>
					<span class="info">
						<p class="sound-name">{{item.name}}</p>
						<p class="user"><img :src="item.user.avatar"><span>{{item.user.name}}</span></p>
						<p class="hot-info"><i class="icon-like"></i><span class="text-like">{{item.like_count}}</span><i class="icon-share"></i><span class="text-share">{{item.share_count}}</span><i class="icon-view"></i><span class="text-view">{{item.view_count}}</span></p>
					</span>
				</li>
			</ul>
			<div v-show="!list.length" class="loading-container">
				<loading></loading>
			</div>
		</bscroll>
	</div>
</template>
<script>
	import axios from 'axios';
	import qs from 'qs';
	import bscroll from '@/base/scroll/scroll';
	import loading from '@/base/loading/loading';
	export default {
		components:
		{
			bscroll,
			loading
		},
		data:function(){
			return {
				list:[]
			}
		},
		mounted:function(){
			var _this=this;
			axios
			.post('https://yumsunsportwear.com/self/echo/index.php',qs.stringify({'url':"http://www.app-echo.com/api/rank/mv-hot?periods=daily&limit=12"}))
			.then(function(res){
				_this.list=res.data.lists.daily;
				console.log(_this.list);
			})
			.catch(function(err){
				console.log(err)
			})
			
		}
	}
</script>
<style scoped>
	.loading-container
	{
		position: absolute;
        width: 100%;
        top: 40%;
        transform: translateY(-50%);
	}
	.bs-wrap
	{
		position: fixed;
    	width: 100%;
    	top: 90px;
    	bottom: 0;
    	background: #fff;
	}
	.bs
	{
		height: 100%;
      	overflow: hidden;
	}
	.daily-rank
	{
		background: #fff;
		padding: 0.4rem 1rem;
	}
	h1
	{
		font-size: 1rem;
		color: #4f4f4f; 
	}
	ul
	{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	li
	{
		margin: 1rem 0;
	}
	.cover
	{
		display: inline-block;
		vertical-align: top;
		width: 6rem;
		height: 6rem;
	}
	.cover img
	{
		width: 100%;
		height: 100%;
		border-radius: 0.4rem;
	}
	.info
	{
		display: inline-block;
		vertical-align: top;
		width: 14rem;
		margin-left: 0.5rem;
	}
	.sound-name
	{
		font-size: 1rem;
		color: #333;
		height: 1.2rem;
		line-height: 1.2rem;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.user
	{
		margin-top: 0.6rem;
		line-height: 1.8rem;
	}
	.user img
	{
		width: 1.8rem;
		height: 1.8rem;
		border-radius: 50%;
	}
	.user span
	{
		font-size: 0.9rem;
		color: #666;
		vertical-align: top;
		margin-left: 0.4rem;
	}
	.hot-info
	{
		line-height: 1.6rem;
	}
	.hot-info span
	{
		display: inline-block;
		color: #666;
		font-size: 0.8rem;
		vertical-align: top;
		width: 2.8rem;
	}
	.hot-info i
	{
		display: inline-block;
		width: 1rem;
		height: 1rem;
		margin: 0.2rem 0.2rem 0 0;
	}
	.icon-like
	{	
		background: url(/src/images/icon/icon-like.png);
		background-size: 100% 100%;
	}
	.icon-share
	{
		background: url(/src/images/icon/icon-share.png);
		background-size: 100% 100%;
	}
	.icon-view
	{
		background: url(/src/images/icon/icon-view.png);
		background-size: 100% 100%;
	}
</style>