## 概述

  初次接触vue，遂尝试模仿什么值得买app做了一个h5的demo。目前只完成了最最基础的一部分功能，大部分都还停留在页面查询上，数据从值得买官网爬过来导入到本地数据库中。
  
# 技术栈
  
 sui + vue + vuex + axios + vue-router + express + mysql
 

# 项目运行


```

数据库导入 src\server\db\stuff.sql

根目录下 npm i 

双击 start.bat

```
 
# TODOLIST
- [ ] 首页查询功能
- [ ] 首页筛选功能
- [ ] 用户关注收藏模块
- [ ] 商品详情100%还原
- [ ] 好价、好物、好文页面数据抓取
- [ ] 个人中心每日签到（canvas滑动扁平公转太阳系） -- 完成demo
- [ ] 上传头像
- [ ] 后台接口common error handler

# 总结

1、使用sui作为本次项目的移动端框架发现有几个弊端，可能也正是这种设计造成了阿里对该框架早早的停止了更新维护，一个是对于不同手机分辨率的适配，sui使用的是媒体查询来设置全局的font-size，覆盖广度很低，并非现在主流的动态计算font-size，造成了目前项目在使用rem为宽度单位的情况下在三星Glaxy S5等手机上显示排版错乱；还有值得吐槽的是自带icon font 太少了Orz...

2、使用vue作为mv层的前端框架开发，现在回过头来看发觉用的还是很浅显的，最近看了点element-ui的组件设计，对于slot和render函数的运用在复用组件开发中起到了非常重要的角色扮演。scoped slot的引入让开发者能跳出多层组件嵌套的窘境。

3、组件封装颗粒度要小，自由度高。vuex的使用解放了变量的随处定义和统一了管理对于全局变量的事件，但是我认为并不能一昧的使用vuex来定义变量，在有些场景还是适合父子组件间emit来触发，而不是头很铁动不动commit mutation / dispatch action。

4、后台数据爬虫做了节流来规避反爬虫封ip，可是觉得自己做的爬虫low爆了，比如爬取知乎就是一个有难度的，适合有时间研究。

5、后台框架用了express，也是基本的curd操作，加了点session控制。

# 项目演示

![](http://7xnggx.com1.z0.glb.clouddn.com/%E9%A6%96%E9%A1%B5%E6%BC%94%E7%A4%BA.gif)
            ![](http://7xnggx.com1.z0.glb.clouddn.com/%E4%B8%AA%E4%BA%BA%E4%B8%AD%E5%BF%83%E6%BC%94%E7%A4%BA.gif)
