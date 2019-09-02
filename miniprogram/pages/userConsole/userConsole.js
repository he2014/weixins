// pages/userConsole/userConsole.js
Page({

  data: {
    openid: ''
  },

  onLoad: function (options) {
    console.log(0)
  
    this.setData({
      openid: getApp().globalData.openid
    })
  }
})