const getdata = require("../../utils/getdata")

const pageOptions = {
  // 页面数据
  data: {
    isFirstOnShow: true, // 是否为首次执行onShow
    gussItemList:{}
  },
  // 页面载入时
  onLoad(e) {
    this.init(e)
    console.log(e.id)
    getdata.gussItemData.get((type,res)=>{
      console.log(res)
      this.setData({
        gussItemList:res.data
      })
    },'product/product/getProductDetails/'+e.id)
    //http://www.51houniao.com/product/product/getProductDetails/07b9c502e17a44928baed452016fb108
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
  onPageScroll() {},
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