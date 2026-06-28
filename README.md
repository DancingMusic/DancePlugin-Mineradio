# DancePlugin-Mineradio

`DancePlugin-Mineradio` 是 DancingMusic 的独立舞台视觉插件，插件名为 `mineradio`。

它迁移自 Mineradio 的舞台歌词主效果，聚焦三件事：

- 粒子封面：使用 Three.js 点云重建当前歌曲封面，并通过宿主节奏协议驱动扩散、脉冲、高潮段落和镜头推进。
- 悬浮歌词：歌词与封面处在同一个 3D 舞台坐标系中，始终平行于封面，不使用宿主左上角 overlay。
- 交互舞台：鼠标拖动改变第一人称视角，双击回正；右侧 3D 歌单架消费宿主传入的队列和歌单快照。

## 仓库定位

本仓库只维护 Mineradio Dancing 插件实现，不维护音乐数据源、播放器宿主、下载页或插件商店目录。

- 宿主运行时、播放器 UI、投屏、连接器调度、打包发布：`DancingMusic/DancingMusic`
- Dancing 插件 SDK 协议：`DancingMusic/DancingPluginSdk`
- 音乐连接器协议和数据源页面：`DancingMusic/MusicStore`
- 插件商店目录和 GitHub Pages 索引：`DancingMusic/DancingStore`
- Mineradio 插件实现：当前仓库

## 开发

```bash
npm install
npm run typecheck
npm test
npm run build
```

当前 `@dancingmusic/plugin-sdk` 尚未发布到 npm，本地开发依赖临时指向同工作区下的 `../DancingMusic/submodules/DancingPluginSdk`。SDK 正式发布后，可以把 `devDependencies.@dancingmusic/plugin-sdk` 切到固定版本号。

## 协议边界

插件只消费 Dancing 插件 SDK 和宿主通过 `updateSettings()` 注入的数据：

- `currentSong`：歌曲标题、歌手、封面、歌词。
- `currentTime`：当前播放时间。
- `playlist`：当前播放队列快照。
- `playlistCollections`：宿主整理后的歌单/播客快照。
- `currentIndex`：宿主当前队列索引。
- `hostActions`：由宿主执行的播放和详情跳转动作。
- `AudioData.rhythm`：宿主统一节奏协议，插件不自行绑定音频元素或创建额外分析器。

详细说明见 [docs/PLUGIN_PROTOCOL.md](./docs/PLUGIN_PROTOCOL.md)。

## 构建产物

`npm run build` 生成：

- `dist/index.js`：ESM 插件包。
- `dist/index.cjs`：CommonJS 插件包。
- `dist/index.d.ts`：类型声明。

插件默认导出 `MineradioPlugin` 类，宿主通过 Dancing 插件加载器动态导入并实例化。

## 授权

本仓库采用 GPL-3.0 协议，见 [LICENSE](./LICENSE)。
