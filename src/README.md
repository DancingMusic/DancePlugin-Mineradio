# Mineradio

`mineradio` 是一个内置 Dancing 插件，参考 `/Users/wuguangliang/workspace/Mineradio` 的舞台歌词主效果制作。

## 吸收的效果

- 舞台歌词：当前行入场、上一行退场，并按当前播放时间做 karaoke 高亮。
- 粒子封面：当前封面会采样成点阵粒子，没有封面时使用程序化粒子封面。
- 第一人称视角：鼠标或触控拖动画布会改变舞台 yaw/pitch，并带轻量惯性回弹。
- 星河光粒：围绕歌词横向流动，随低频和溢光增强。
- 阳光溢光：参考 Mineradio 的“歌词阳光溢光”，由持续能量、中高频和 beat 共同推动。
- 歌曲氛围：粒子封面、悬浮歌词和星河共享同一视角偏移。
- 无歌词 fallback：宿主还没解析到歌词时显示 `歌名 - 歌手`，不主动请求歌词。

## 边界

- 只消费宿主传入的 `currentSong/currentTime/AudioData`。
- 不调用音乐连接器，不拉取歌词或音源。
- 不创建播放器控件，不改变宿主 canvas 尺寸。
- 插件自己渲染歌名、歌手、封面和歌词，因此通过 `hostOverlay` 关闭宿主左上角 overlay。

## 结构

- `index.ts`：Canvas 2D 舞台渲染主实现。
- `lyrics.ts`：歌词过滤、fallback、当前行和行内进度。
- `palette.ts`：稳定色盘和颜色工具。
- `mineradio-thumbnail.svg`：效果切换和商店列表缩略图。
