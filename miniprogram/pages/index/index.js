// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // index页导航菜单栏选择索引
    currentIndexNav:0,
    navList:["直播","推荐","热门","追番","影视","70年"],
    swiperList: ["../../images/swiper1.png", "../../images/swiper2.png","../../images/swiper3.png"],
    videoList:[]
  },
  activeNav(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },

  gotoDetail: function (event) {
    
    wx.navigateTo({
      url: `../detail/detail?videoid={{item.aid}}`,
    });

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:'bili_video_swiper',
    }).then(res => {
      console.log(res);
      this.setData({
        videoList: this.data.videoList.concat(JSON.parse(res.result).list)
      })
    }).catch(err => {
      console.error(err);
    })
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