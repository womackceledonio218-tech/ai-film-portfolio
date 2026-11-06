# 李谢怡 · AI 影像作品集

黑色星空与旋转画框开场、连续首页、环绕作品预览及项目详情。原生 HTML、CSS、JavaScript 和本地 GSAP，无需安装依赖或构建。

## 本地浏览

Windows 双击“启动预览.cmd”，或在浏览器打开 index.html。影片使用 Git LFS 存储，克隆后需安装 Git LFS 并执行 git lfs pull 才能完整观看。GitHub Pages 不直接提供 LFS 视频，部署时需使用可访问的影片托管地址。

## 浏览路径

开场点击“进入作品集”、向下滚动或按 Enter 进入首页。首页依次展示基本信息、环绕作品、个人经历和联系方式；页眉导航定位到对应板块，随滚动更新当前项。开场与项目详情保留独立入口。

精选环绕包含《赵州桥》《定海》《真人转绘》三个已完成项目，支持拖动、左右按钮、圆点及方向键；点击任意作品进入详情。星空、旋转画框与环绕持续开启；读卡、键盘聚焦和拖动时临时保持，操作结束后恢复。长首页的纵向滚轮用于浏览页面。

详情页包含成片、过程与职责。观看入口播放当前页影片，离开项目自动暂停。“返回作品”定位首页环绕区。联系区与页眉提供重看开场入口。

## 直达地址

- index.html#home：首页
- index.html#works：作品板块
- index.html#personal：个人经历，兼容旧 #about
- index.html#contact：联系方式
- index.html#intro：开场
- index.html#project/bridge：赵州桥
- index.html#project/journey：定海
- index.html#project/rotoscope：真人转绘
- index.html#project/amber：琥珀与翡翠进行中资料，不进入精选环绕

works.html、project.html?id=... 兼容旧入口。

## 文件

app.js 管理项目数据、路由、环绕及滚动导航；scene.js 绘制星空与画框；styles.css 管理布局与响应式。素材在 assets，GSAP 和 ScrollTrigger 在 vendor，许可见 vendor/LICENSE-NOTICE.md。

项目数量、制作范围与结果以网站正文的已确认口径为准，不将团队全片时长视为个人产出。
