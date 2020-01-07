//index.js
//获取应用实例
const app = getApp()
let timer;
let numAi = 0;
Page({
  data:{
    btnState:false,
    winNum: 0,
    imageAiScr:'',
    imageUserSrc:'/pages/image/wenhao.png',
    gameResult:'',
    srcs:[
       '/pages/image/shitou.png',
       '/pages/image/jandao.png',
       '/pages/image/bu.png'
    ]
  },
  onLoad( options ){
    //生命周期函数 -- 监听页面加载
    let oldWinNum = wx.getStorageSync('winNum')
    if(oldWinNum != null && oldWinNum != ''){
      this.setData({winNum : oldWinNum})
    }
    this.timerGo();

  },
  changeForChoose(e){
    if (this.data.btnState) {
      return;
    }
    this.setData({
      imageUserSrc: this.data.srcs[e.currentTarget.id] //获取当前点击目标id时的图片路径
    })
    clearInterval(timer); //清除定时器

    let user = this.data.imageUserSrc;
    let ai = this.data.imageAiScr;
    let num = this.data.winNum;
    let str = "你输了";

    if ( user == '/pages/image/shitou.png' && ai == '/pages/image/jandao.png'){
      num ++;
      str = "你赢了！";
      wx.setStorageSync('winNum', num)
    }
    if (user == '/pages/image/bu.png' && ai == '/pages/image/shitou.png') {
      num++;
      str = "你赢了！";
      wx.setStorageSync('winNum', num)
    }
    if (user == '/pages/image/jandao.png' && ai == '/pages/image/bu.png') {
      num++;
      str = "你赢了！";
      wx.setStorageSync('winNum', num)
    }
    if (user ==ai ) {
      str = "平局";
    }
    this.setData({
      winNum: num,
      gameResult: str,
      btnState: true
    })
  },
  timerGo(){
    timer = setInterval(this.move , 80)
  },
  move(){
     /* 
     //按顺序出拳
     if (numAi >= 3) {
        numAi = 0;
      }*/
      numAi = parseInt(Math.floor(Math.random()*3));//随机出拳
      this.setData({ imageAiScr: this.data.srcs[numAi] })
      //numAi++;
  },
  again(){
    if(this.data.btnState == false){
      return;
    }
    this.timerGo();
    this.setData({
      btnState: false,
      gameResult: '',
      imageUserSrc: '/pages/image/wenhao.png',

    })
  }
})
