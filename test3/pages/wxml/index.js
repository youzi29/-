// pages/wxml/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: (new Date()).toString(),
    item: {
     index: 0,
     msg: 'this is a template',
     time: '2019-12-24',
    },
   
      eleColor:'red',
      eleFontsize: '48rpx'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ msg: 'hello' })
    var appInstance = getApp()
    console.log(appInstance.globalData1)
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },
  clickMe: function (options){
    
     console.log(123)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})