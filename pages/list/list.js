Page({
	data: {
		message: 'Hello mini-apps',
		list: []
	},
	onLoad () {
		// 加载数据并呈现到页面
		// this.data.message = 'hihd'  不可以，因为小程序平台捕获不到
		// this.setData({
		// 	message: Date.now()
		// })
		// 获取一个API中的数据，不要使用Ajax的api，因为它是BOM提供的，应使用微信官方提供的API
		const _this = this;
		wx.request({
		  url: 'https://api.douban.com/v2/movie/in_theaters', //仅为示例，并非真实的接口地址
		  data: {},
		  header: {
		      'content-type': 'json' // 默认值
		  },
		  success: function(res) {
		    _this.setData({
		    	list: res.data.subjects
		    })
		  }
		})
	}
}) 