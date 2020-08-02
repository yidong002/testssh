const getdata = require("../../utils/getdata")

const pageOptions = {
  // 页面数据
  data: {
    isFirstOnShow: true, // 是否为首次执行onShow
    itemList:[],
    gaiyaoType:false,
    xiangxiType:false,
    jiageType:false,
    type:false,
    xingchengTop:0,
    xiangxiTop:0,
    jiageTop:0
  },
  gohome:function(){
    wx.switchTab({
      url: '/pages/Hmain/Hmain'
    })
  },
  phonecall:function(){
    wx.makePhoneCall({
      phoneNumber: '4008810706',
    })
  },
  // 页面载入时
  onLoad(e) {
    this.init(e)
    console.log(e);
    // wx/customer/classic/product_info.html?pageid=
    getdata.recommendItemData.get((type,res)=>{
      console.log(res);
      this.setData({
        itemList:res.data
      })
      //获取行程概要、详细行程、价格说明的内容距离顶部的距离
      wx.createSelectorQuery().select('#xingcheng').boundingClientRect(rect=>{
        console.log(rect)
        this.setData({
          xingchengTop:rect.top
        })
      }).exec();  
      wx.createSelectorQuery().select('#xiangxi').boundingClientRect(rect=>{
        console.log(rect)
        this.setData({
          xiangxiTop:rect.top
        })
      }).exec();  
      wx.createSelectorQuery().select('#jiage').boundingClientRect(rect=>{
        // console.log(rect)
        this.setData({
          jiageTop:rect.top
        })
      }).exec();  



    },'product/product/getProductDetails/'+e.id)
  },
  
  // 页面初始化
  init(e) {},
  // 页面准备好时
  onReady() {},
  // 页面显示时
  onShow() {
    const { isFirstOnShow } = this.data

    if (isFirstOnShow) {
      // 首次执行时
      this.setData({
        isFirstOnShow: false,
      })
      return
    }
  },
  // 页面隐藏时
  onHide() {},
  // 页面卸载时
  onUnload() {},
  // 下拉页面时
  onPullDownRefresh() {},
  // 到达页面底部时
  onReachBottom() {},
  // 页面滚动时
  onPageScroll(res) {
    // console.log(res)
    let scrollTop = res.scrollTop+55;
    if(scrollTop >=this.data.xingchengTop && scrollTop <this.data.xiangxiTop){
      // console.log('判断')
      this.setData({
        type:true,
        gaiyaoType:true,
        xiangxiType:false,
        jiageType:false
      })
    }else if(scrollTop >=this.data.xiangxiTop && scrollTop <this.data.jiageTop){
      this.setData({
        type:true,
        gaiyaoType:false,
        xiangxiType:true,
        jiageType:false
      })
    }else if(scrollTop >= this.data.jiageTop){
      this.setData({
        type:true,
        gaiyaoType:false,
        xiangxiType:false,
        jiageType:true
      })
    }else{
      this.setData({
        type:false
      })
    }

  },
  // 分享时，注：onShareAppMessage不能为async异步函数，会导致不能及时取得返回值，使得分享设置无效
  onShareAppMessage() {
    /* const title = ''
    const path = ''
    const imageUrl = ``

    return {
      title,
      path,
      imageUrl,
    } */
  },
}

Page(pageOptions)
