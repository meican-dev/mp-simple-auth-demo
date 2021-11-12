// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    params: {
      "realName": "我的家",
      "employeeId": "asdfxxxyzx",
      "namespace": "meican_new",
      "email":"b@planetmeican.com",
      "version": "v1.1",
      "timestamp": 1636644379597,
      "signature": "00c835e46702308d45f967739a54dbbcca65a51b",
      "mobile": "13716403644",
      "department": "没有这个部门"
    }
  },
  openMeican() {
    wx.navigateToMiniProgram({
      extraData: this.data.params,
      appId: "wx8be7eeee79011493",
      path: 'pages/simpleAuth/index',
      envVersion: 'develop'
    })
  }
})
