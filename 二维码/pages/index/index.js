//index.js
//获取应用实例
const app = getApp()
let QR = require('../../utils/qrcode.js')
Page({
  data: {
    placeholder: "http://baidu.com"
  },
 
  onLoad: function () {
      let size=this.setCanvasSize()
      let url = this.data.placeholder
      this.createQRcode(url , 'mycanvas' , size.w , size.h)
  },
  createQRcode(url,canvasId,canvasWidth,canvasHeight){
    QR.api.draw(url, canvasId, canvasWidth, canvasHeight)
  },
  setCanvasSize(){
    let size={}
    let res=wx.getSystemInfoSync()
    let scale = 686/750;
    let width = res.windowWidth*scale;
    let height = width;
    size.w = width;
    size.h = height;
    return size
  },
  formSubmit(e){
    console.log(123)
    let url = e.detail.value.url || this.data.placeholder
    wx.showToast({
      title: '生成中，请稍后~',
      icon:'loading',
      duration:2000
    })
    let that = this
    let timer = setTimeout(() => {
      let size = that.setCanvasSize()
      this.createQRcode(url, 'mycanvas', size.w, size.h)
      wx.hideToast()
      clearTimeout(timer)
    },2000)
  }
 
})
