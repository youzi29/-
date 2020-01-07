//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    background: [
      '/pages/image/img1.jpg',
      '/pages/image/img2.jpg',
      '/pages/image/img3.jpg',
      '/pages/image/img4.jpg',
      '/pages/image/img5.jpg',
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular:true,
    movie:null
  },
 
  onLoad: function () {
   //生命周期函数--监听页面加载
   this.loadMovie()
  },
  loadMovie(){
    wx.showToast({
      title: '正在加载',
      icon:'loading',
      duration:10000
    })
    let thispage = this;
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index',
      data:{
        key:'88b79ccb7f0451d9b3df8d304dd368ea',
        type: 'yule'
      },
      method:'GET',
      header:{'cokntent-type':'json'},
      success: function(res){
        console.log(res)
        let subjects = res.data.result.data
        thispage.setData({movie:subjects})
        wx.hideToast()
      }
    })
  }
  
})
