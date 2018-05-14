import Vue from 'vue'
import Router from 'vue-router'
import recomand from '@/components/recomand/recomand'
// import hot from '@/components/hot/hot'
// import famous from '@/components/famous/famous'
// import mv from '@/components/mv/mv'
// import origin from '@/components/origin/origin'
// import sound from '@/components/sound/sound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: recomand,
      meta:{
			title:'moju music'
		}
    }
  //   {
  //   	path:'hot',
		// component:hot,
		// meta:{
		// 	title:'热门'
		// }
  //   },
  //   {
  //   	path:'famous',
		// component:famous,
		// meta:{
		// 	title:'名人'
		// }
  //   },
  //   {
  //   	path:'mv',
		// component:mv,
		// meta:{
		// 	title:'mv'
		// }
  //   },
  //   {
  //   	path:'origin',
		// component:origin,
		// meta:{
		// 	title:'原创'
		// }
  //   },
  //   {
  //   	path:'/sound/:id',
		// meta:{
		// 	title:'歌曲详情'
		// },
		// component:sound
  //   }
  ]
})