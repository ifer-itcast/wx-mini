Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorList: [],
    isLoading: false // 可以发起请求
  },
  /**
   * 获取随机颜色
   */
  getColors() {
    this.setData({
      isLoading: true // 正在请求
    });
    wx.showLoading({
      title: '数据加载中...'
    });
    wx.request({
      url: 'https://www.escook.cn/api/color',
      success: ({
        data: res
      }) => {
        this.setData({
          colorList: [...this.data.colorList, ...res.data]
        });
      },
      complete: () => {
        wx.hideLoading();
        this.setData({
          isLoading: false // 可以发起请求
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getColors();
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
    // 正在请求，则打回去
    if (this.data.isLoading) return;
    this.getColors();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})