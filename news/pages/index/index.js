//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   focus: {},
   newslist:{},
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    circular: true,
    test:{"youy":"0","djhh":"1","sfdd":"2",
          "dgdf":"3","sfss":"3","trtt":"4",
          "yhgd":"6","jnjh":"7","kmki":"8",}
  },
 
  onLoad: function () {
    
    console.log('加载时触发')
    var that = this;
    /*wx.request({
      url: 'http://v.juhe.cn/toutiao/index',
      data:{
        key: '88b79ccb7f0451d9b3df8d304dd368ea',
        type: 'shishang'
      },
      success: function( res ){
       
       that.setData({
         focus: res.data.result.data.slice(1, 5)
       })
      }
    })
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index',
      data: {
        key: '88b79ccb7f0451d9b3df8d304dd368ea',
        type: 'yule'
      },
      success: function (res) {
        console.log(res.data.result.data.slice(0, 20))
        that.setData({
          newslist: res.data.result.data.slice(0, 20)
        })
      }
    })*/
      
  },
  onPullDownRefresh: function () {
    this.onLoad();
  },

 
  onShareAppMessage: function(){
    return{
      title:'看新闻小程序',
      desc: '快来看看吧~',
      path: 'pages/index/index'
    }
  },
  onReachBottom: function(){
    console.log(1)
  }

 /** getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }*/
})
