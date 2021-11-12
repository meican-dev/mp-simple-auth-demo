MP Simple Auth Demo
===

> 使用 simpleAuth 的方式打开美餐小程序，进行自动登录 

使用 [`wx.navigateToMiniProgram`](https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html) 打开美餐小程序，需要传入 3 个参数：

* `appId`: 美餐小程序 ID 为 `wx8be7eeee79011493`
* `path`: `pages/simpleAuth/index`
* `extraData`: 认证参数

```js
wx.navigateToMiniProgram({
  extraData: {
    realName: "我的家",
    employeeId: "{{employeeId}}",
    namespace: "{{namespace}}",
    email:"b@yourcompany.com",
    version: "v1.1",
    timestamp: 1636644379597,
    signature: "00c835e46702308d45f967739a54dbbcca65a51b",
    mobile: "18888888888",
    department: "没有这个部门"
  },
  appId: "wx8be7eeee79011493",
  path: 'pages/simpleAuth/index',
})
```

