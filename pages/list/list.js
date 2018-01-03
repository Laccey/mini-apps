Page({
	data: {
		list: [],
		title: 'loading...'
	},
	onLoad (params) {
		// wx.request({
		// 	url: ''
		// })
		const _this = this;
		const url = `https://api.douban.com/v2/movie/${params.type}?count=5`;
		wx.request({
			url: url,
			data: {},
			header: {
				'content-type':'json'
			},
			success (res) {
				_this.setData({
					title: params.name,
					list: res.data.subjects
				})
			}
		});
	}
}) 