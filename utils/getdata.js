const apiurl = "https://www.51houniao.com/";

const swiperData = {
   get(callback,url){
       wx.showLoading({
           title:'加载中...',
       })
       wx.request({
           url:apiurl+url,
           header:{
            'content-type': 'application/json' 
           },
           method:'GET',
           success:function(res){
               wx.hideLoading();
               callback('success',res);
           },
           fail:function(err){
               wx.hideLoading();
               console.log(err);
           }
       })
   },
    post(callback,url){
        wx.showLoading({
            title:'加载中...',
        })
        wx.request({
            url:apiurl+url,
            header:{
            'content-type': 'application/json' 
            },
            data:{
            desc: false,
            orderBy: "top",
            pageNow: 1,
            pageSize: 20,
            seller_user_id: "4bc4027c645343f09a964b5c2e9f875b"
            },
            method:'POST',
            success:function(res){
                wx.hideLoading();
                callback('success',res);
            },
            fail:function(err){
                wx.hideLoading();
                console.log(err);
            }
        })
    }
}
const gussyoulikeData = {
   get(callback,url){
       wx.showLoading({
           title:'加载中...',
       })
       wx.request({
           url:apiurl+url,
           header:{
            'content-type': 'application/json' 
           },
           method:'GET',
           success:function(res){
               wx.hideLoading();
               callback('success',res);
           },
           fail:function(err){
               wx.hideLoading();
               console.log(err);
           }
       })
   }
}
const gussItemData = {
   get(callback,url){
       wx.showLoading({
           title:'加载中...',
       })
       wx.request({
           url:apiurl+url,
           header:{
            'content-type': 'application/json' 
           },
           method:'GET',
           success:function(res){
               wx.hideLoading();
               callback('success',res);
           },
           fail:function(err){
               wx.hideLoading();
               console.log(err);
           }
       })
   }
}
const recommendItemData = {
   get(callback,url){
       wx.showLoading({
           title:'加载中...',
       })
       wx.request({
           url:apiurl+url,
           header:{
            'content-type': 'application/json' 
           },
           
           method:'GET',
           success:function(res){
               wx.hideLoading();
               callback('success',res);
           },
           fail:function(err){
               wx.hideLoading();
               console.log(err);
           }
       })
   }
}
const recommendData = {
   post(callback,url){
       wx.showLoading({
           title:'加载中...',
       })
       wx.request({
           url:apiurl+url,
           header:{
            'content-type': 'application/json' 
           },
           data:{
            desc: false,
            orderBy: "top",
            pageNow: 1,
            pageSize: 20,
            seller_user_id: "4bc4027c645343f09a964b5c2e9f875b"
           },
           method:'POST',
           success:function(res){
               wx.hideLoading();
               callback('success',res);
           },
           fail:function(err){
               wx.hideLoading();
               console.log(err);
           }
       })
   }
}
const jijieData = {
   post(callback,url){
       wx.showLoading({
           title:'加载中...',
       })
       wx.request({
           url:apiurl+url,
           header:{
            'content-type': 'application/json' 
           },
           data:{
            product_type: 1,
            request_season: ["春意阑珊"]
           },
           method:'POST',
           success:function(res){
               wx.hideLoading();
               callback('success',res);
           },
           fail:function(err){
               wx.hideLoading();
               console.log(err);
           }
       })
   }
}
const zhouData = {
    get(callback,url){
        wx.showLoading({
            title:'加载中...',
        })
        wx.request({
            url:apiurl+url,
            header:{
             'content-type': 'application/json' 
            },
            
            method:'GET',
            success:function(res){
                wx.hideLoading();
                callback('success',res);
            },
            fail:function(err){
                wx.hideLoading();
                console.log(err);
            }
        })
    }
 }
module.exports = {
    swiperData:swiperData,
    recommendData:recommendData,
    gussyoulikeData:gussyoulikeData,
    recommendItemData:recommendItemData,
    gussItemData:gussItemData,
    jijieData:jijieData,
    zhouData:zhouData
}