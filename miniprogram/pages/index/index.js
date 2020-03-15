// miniprogram/pages/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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

    },

    getData() {
        wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'],
            success: res => {
                const FileSystemManager = wx.getFileSystemManager();
                this.setData({
                    imageUrl: res.tempFilePaths[0]
                });
                FileSystemManager.readFile({
                    filePath: res.tempFilePaths[0],
                    encoding: 'base64',
                    success: function (res) {
                        console.log(res);
                        wx.cloud.callFunction({
                            // 需调用的云函数名
                            name: 'getImageInfo',
                            // 传给云函数的参数
                            data: {
                                imageBase64: res.data
                            }
                        }).then(result => {
                            console.log(result);
                        });
                    }
                });
            },
            fail: err => {
                reject(err);
            }
        });
    }
})