//index.js
//获取应用实例
const app = getApp()
let QR = require('../../utils/qrcode.js')
Page({
  data: {
    
  },
 
  onLoad: function () {
    let size=this.setCanvasSize()
      this.createQRcode()
  },
  createQRcode(url,canvasId,canvasWidth,canvasHeight){
    QR.api.draw(url, canvasId, canvasWidth, canvasHeight)
  },
  setCanvasSize(){
    let size={}
    let res=wx.getSystemInfoSync()
  }
 
})
