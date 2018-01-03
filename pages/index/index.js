//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  	boards: [
  		{ 
  			type: 'in_theaters',
  			name: '正在热映'
  		},
  		{ 
  			type: 'coming_soon',
  			name: '即将上映'
  		},
  		{ 
  			type: 'top250',
  			name: 'Top250'
  		},
  		{ 
  			type: 'us_box',
  			name: '北美电影榜'
  		}
  	],
    imgUrls: [
      'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508926717.jpg',
      'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507024497.jpg',
      'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507022339.jpg'
    ]
  },
  onLoad () {
    
  }
})
