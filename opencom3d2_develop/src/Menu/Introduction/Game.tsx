import { Typography, Alert, Button, Space, Divider } from 'antd'
import React from "react";
import { Link } from 'react-router-dom';
import Plugin from './Plugin'

const MenuItem = {
  label: "游戏(本体与DLC)",
  key: "/Introduction/Game",
  page: () => <div>
    <Typography.Title level={2}>如何获取最新的本体和DLC?</Typography.Title>
    <Typography.Paragraph>
      <ol>
        <li>
          <Typography.Paragraph>
            <Space direction='vertical'>
              先通过以下网站搜索COM3D2，挑选一个合适自己的游戏版本。
              <div>
                <Space>
                  <Button href='https://ggbases.dlgal.com/' target="_blank" rel="noreferrer">GGBases（国内可用）</Button>
                  <Button href='https://sukebei.nyaa.si/' target="_blank" rel="noreferrer">Sukebei</Button>
                </Space>
              </div>
              <Alert showIcon message="如果你是轻度玩家，我建议你直接下载COM3D2 2.28版本，这是国内的主流版本，兼容性最好！" type="warning" />
              <Alert showIcon message="目前的汉化插件是针对COM3D2 2.28版本的，其他版本会略有问题！" type="error" />
              <Alert type="success" message={
                <ul >
                  <li>要下载全DLC版，因为很多Mod会用到里面的功能。</li>
                  <li>国内是COM3D2主流，国外是COM3D2.5，COM3D2的东西在COM3D2.5也能用，但反之不行。</li>
                  <li>COM3D2.5和COM3D2的区别主要是画质，2.5的模型更精细一点，皮肤纹理更丰富，比如能清晰的看到锁骨痕迹。</li>
                  <li>一些插件不兼容新版本，如高跟鞋插件，这会导致一些Mod显示异常(不过我是按CMI为准所以不会装这些插件)。</li>
                  <li>下载人数越多的资源下载越快，再加上国情原因，实际跟着老外下速度会更快点。</li>
                </ul>
              } />
            </Space>
          </Typography.Paragraph>
        </li>
        <li>
          <Typography.Paragraph>
            <Space direction='vertical'>
              获取到游戏的种子或磁链后，使用p2p下载软件进行下载，比如：
              <ul>
                <li>百度网盘</li>
                <li>迅雷</li>
                <li>
                  <a href="https://github.com/c0re100/qBittorrent-Enhanced-Edition/releases" target="_blank" rel="noreferrer">
                    qBittorrent
                  </a>
                  （推荐，开源软件，干净安全不限速，平均速度比迅雷百度快）
                </li>
                <li>BitComet</li>
                <Alert message={
                  <div>
                    以上几种软件的基本原理都是一样的，有关原理的解读和qBittorrent的使用方法可以参照这个
                    <a href="https://www.bilibili.com/video/BV1CM411B7Fu" target="_blank" rel="noreferrer" >
                      视频
                    </a>
                  </div>
                }></Alert>
              </ul>
            </Space>
          </Typography.Paragraph>
        </li>
        <li>
          <Typography.Paragraph>
            下载完就可以享受啦！(这是官方的
            <a href="https://com3d2.jp/" target="_blank" rel="noreferrer">
              COM3D2产品一览
            </a>
            ，你可以以此查缺补漏。)
          </Typography.Paragraph>
        </li>
      </ol>
    </Typography.Paragraph>
    <Divider></Divider>
    <Alert showIcon type="warning" message={
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        强烈建议之后赶紧把插件装上（不然没汉化也没法用Mod）。
        <Button><Link to={Plugin.key}>下一章</Link> </Button>
      </div>
    }></Alert>
  </div >
}

export default MenuItem;