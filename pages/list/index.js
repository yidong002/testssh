const getdata = require('../../utils/getdata.js');
const pageOptions = {
  // 页面数据
  data: {
    isFirstOnShow: true, // 是否为首次执行onShow
    searchValue:'',
    dingzhiArr:[],
    page:1,
    endType:false
  },
  // 页面载入时
  onLoad(e) {
    this.init(e);
    console.log(e)
    let searchValue = e.searchValue;
    if(searchValue == ''){
      searchValue = '中国';

    }
    this.setData({
      searchValue:searchValue
    })
    this.getListData();
  },
  getListData:function(){
    getdata.recommendData.post((type,res)=>{
      this.setData({
        dingzhiArr:res.data.matchedProducts
      })
      console.log(this.data.dingzhiArr)
    },'requirement/request/getMatchedProducts',{curPagePath: "/wx/customer/classic/search.html?pageid=daWczpKXo4OG0X8Tbb7i",keyWord: this.data.searchValue,pageNow: this.data.page,pageSize: 20,product_type: 1})
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
  onPullDownRefresh() {
    this.getListData();
    wx.stopPullDownRefresh();
  },
  // 到达页面底部时
  onReachBottom() {
    if(!this.data.endType){
      this.setData({
        page:this.data.page+1
      })

      getdata.recommendData.post((type,res)=>{
        if(type == 'success'){
          if(res.data.matchedProducts.length !=0){
            let oldData = this.data.dingzhiArr;
            let newData = oldData.concat(res.data.matchedProducts);
            this.setData({
              dingzhiArr:newData
            })
          }else{
            this.setData({
              endType:true
            })
          }
        }
        
      },'requirement/request/getMatchedProducts',{curPagePath: "/wx/customer/classic/search.html?pageid=daWczpKXo4OG0X8Tbb7i",keyWord: this.data.searchValue,pageNow: this.data.page,pageSize: 50,product_type: 1})
    }
  },
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
