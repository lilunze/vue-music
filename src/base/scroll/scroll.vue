<template>
	<div ref="wrapper">
		<slot></slot>
	</div>
</template>
<script>
	import Bscroll from 'better-scroll'

	export default {
		props:{
			data:{
				type:Array,
				default:null
			}
		},
		mounted:function(){
			setTimeout(() => {
		        this._initScroll()
		      }, 20)
		},
		methods:{
			_initScroll:function(){
				if(!this.$refs.wrapper)
				{
					return
				}
				this.scroll=new Bscroll(this.$refs.wrapper,{})
			},
			disable:function(){
		        this.scroll && this.scroll.disable()
	      	},
	      	enable:function(){
		        this.scroll && this.scroll.enable()
		      },
	      	refresh:function(){
		        this.scroll && this.scroll.refresh()
	      	},
	      	scrollTo:function(){
		        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
	      	},
	      	scrollToElement:function(){
		        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
	      	}
		},
		watch:{
			data(){
				setTimeout(()=>{
					this.refresh()
				},20)
			}
		}
	}
</script>
<style>
	
</style>
