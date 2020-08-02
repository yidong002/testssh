const getdata= require('../../utils/getdata.js');
const pageOptions = {
  // 页面数据
  data: {
    isFirstOnShow: true, // 是否为首次执行onShow
    zhouArr:[
      {"id":1,"name":"欧洲","key":"Europe"},
      {"id":2,"name":"亚洲","key":"Asia"},
      {"id":3,"name":"非洲","key":"Africa"},
      {"id":4,"name":"大洋洲","key":"Oceania"},
      {"id":5,"name":"北美洲","key":"NorthAmerica"},
      {"id":6,"name":"南美洲","key":"SouthAmerica"},
    ],
    defaultZhouId:1,
    zhouName:'欧洲',
    zhouKey:'Europe',
    hotCountryArr:[],
    otherCountryArr:[]
  },
  changeMapColor:function(ev){
    // console.log(ev)
    this.setData({
      defaultZhouId:ev.currentTarget.dataset.id,
      zhouName:ev.currentTarget.dataset.name,
      zhouKey:ev.currentTarget.dataset.key
    })
    this.getMapData();
  },
  getMapData(){
    getdata.swiperData.get((type,res)=>{
      console.log(res)
      if(type == "success"){
        this.setData({
          hotCountryArr:res.data.hot_country_list,
          otherCountryArr:res.data.other_country_list
        })
      }
    },`product/desc/CountryList/${this.data.zhouName}/${this.data.zhouKey}`)
  },
  // 页面载入时
  onLoad(e) {
    this.init(e);
    this.getMapData();
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
