使用脚本提供的顶栏替换原版的主站顶栏 (非主站不替换).

启用后还可以在反广告插件 (例如 ABP) 中配置禁止原版顶栏的消息 iframe 以提升性能:
- *://message.bilibili.com/pages/nav/index_new_pc_sync
- *://message.bilibili.com/pages/nav/index_new_sync

选项说明:
- `全局固定`: 将顶栏固定显示, 即使页面向下滚动也仍然可见. (除了一部分有 b 站定制顶栏的页面会忽略此选项)
- `主题色填充`: 使用通用设置中的主题颜色填充顶栏的背景.
- `透明填充`: 在首页和主站的部分页面中, 当存在顶部横幅图片时, 顶栏背景将变为透明 + 阴影的样式.
- `背景模糊`: 启用背景模糊效果, 会使背景颜色变得半透明, 注意这个效果非常非常消耗图形性能, 慎用.
- `投影`: 在顶栏下方增加一小段投影效果.
- `使用季节 Logo`: 使用 b 站首页的特殊 Logo 图片替换顶栏的 Logo 图, 通常会对应当前季节, 特殊活动期间可能会有变化导致看不清. (比如搞了个全白的 Logo, 而顶栏正好也是白色的)
- `触摸模式`: 启用后顶栏的一级入口点击时不进行跳转, 方便触屏使用.
- `新标签页打开`: 控制顶栏内链接是否在新标签页打开.
- `自动刷新数据`: 启用后, 部分有弹窗的顶栏入口在鼠标经过时会自动刷新数据.
- `顶栏高度`: 自定义顶栏的高度 (b 站原版的为 64px)
- `消息提醒样式`: 自定义顶栏入口的消息提醒样式.
- `搜索栏宽度`: 自定义搜索栏占顶栏的比例.
- `链接对齐样式`: 自定义纯链接弹窗内链接文字的对齐样式.