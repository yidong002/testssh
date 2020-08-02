const getdata = require("../../utils/getdata")

// pages/Hmain/Hmain.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    recommendList:[],
    gussList:[]
  },
  recommendItem:function(ev){
    const id = ev.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/recommenItem/index?id='+id,
    })
  },
  gussItem:function(ev){
    const id = ev.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/gussItem/index?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 轮播
    getdata.swiperData.get((type,res)=>{
      console.log(res)
      this.setData({
        swiperList:res.data
      })
    },'product/banner/getBySeller/4bc4027c645343f09a964b5c2e9f875b')
    // 猜你喜欢
    getdata.gussyoulikeData.get((type,res)=>{
      console.log(res)
      this.setData({
        gussList:res.data
      })
    },'product/product/guessYouLike')
    // 推荐
    getdata.recommendData.post((type,res)=>{
      console.log(res)
      this.setData({
        recommendList:res.data
      })
    },'product/product/getProductRecommendUser')
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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