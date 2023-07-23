import { Typography, Alert, Space, Card, Button, Divider } from 'antd'
import { Link } from 'react-router-dom';
import Module from './Module'

const MenuItem = {
    label: "插件(含汉化)",
    key: "/Introduction/Plugin",
    page: () => <div>
        <Typography.Title level={2}>插件是什么？</Typography.Title>
        <Typography.Paragraph>
            这是对原游戏功能的扩展，能极大提升游戏体验（比如翻译，作弊，解码，不闪退等），可以说是基本必装的东西。
        </Typography.Paragraph>
        <Typography.Title level={2}>如何获取插件并安装？</Typography.Title>
        <Typography.Paragraph>
            <Space direction='vertical'>
                <div>
                    直接用<a href="https://krypto5863.github.io/COM-Modular-Installer/download.html"
                        target="_blank" rel="noreferrer">COM-Modular-Installer</a>(后续简称CMI)。
                    <br />
                    这是老外做的一个能自动安装的插件整合包，插件全且兼容性好。
                </div>
                <Alert showIcon message="确保你的游戏路径没有中文，部分插件不支持中文路径。" type="error" />
                <Alert showIcon type='warning' message="安装时记得把翻译插件去掉，因为那是英文的，而且你也没法用谷歌翻译。(但对老外来说CMI自带v2汉化)"></Alert>
                <Alert type="success" message={
                    <ul>
                        <li>记得勾选一个叫NPRShader的插件，这个插件需要手动勾选，而有些Mod需要这个。</li>
                        <li>CMI自带作弊插件和一款修改器，该修改器需要手动勾选，具体参见文档。</li>
                        <li>装完后游戏目录会出现一个<strong>CMI Documentation</strong>文件夹，文档在这里面，记得读......放心有中文版。</li>
                        <li>CMI是支持重复安装的，会自动清理游戏目录，如有喜欢的插件没勾选，可以直接重新安装。</li>
                        <li>如何卸载CMI？重新安装并取消所有插件勾选即可。</li>
                        <li>少部分Mod没有被CMI收入，比如还有一个高跟鞋插件，也有些Mod会用到这些，具体文档内有说明。</li>
                    </ul>
                } />
            </Space>
        </Typography.Paragraph>
        <Typography.Title level={2}>额外的汉化补丁在哪？</Typography.Title>
        <Typography.Paragraph>
            <Space direction='vertical'>
                由于是老外的东西，所以CMI自带的翻译并不支持中文，但别怕，我准备好了。
                <Card
                    title="COM3D2 2.28 汉化补丁v3"
                    extra={
                        <Button style={{ color: "white" }} type="primary" href="https://wwzc.lanzouj.com/iglWz12se7cf" target="_blank" rel="noreferrer">
                            下载
                        </Button>
                    }
                    style={{ width: 500 }}
                >
                    该补丁由两部分组成
                    <ul>
                        <li>来自杂酱整合包的汉化文件(B站up：zaj2001)</li>
                        <li>一款非原版的YATranslator插件(<a href='https://github.com/BDFFZI/CM3D2.YATranslator.git' target="_blank" rel="noreferrer">BDFFZI.YATranslator</a>)</li>
                    </ul>
                    使用方式：装完CMI后直接将这补丁解压到游戏根目录即可。
                </Card>
                <Alert showIcon type="warning" message="随着版本更新，汉化文件不一定兼容！" description={
                    <ul>
                        <li>文本汉化（对话翻译）不全？<br />此时可以借用v2汉化补丁的实时翻译功能，进行在线机翻。</li>
                        <li>图片翻译（界面翻译）异常？<br />可以尝试删除Sybaris\UnityInjector\Config\Assets文件夹或其中出错的图片，以取消图片翻译功能。</li>
                    </ul>
                }
                ></Alert>
            </Space>
        </Typography.Paragraph>
        <Divider></Divider>
        <Alert showIcon type="success" message={
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                接下来你可以尝试装Mod看看，这样就可以把老婆带进游戏啦！
                <Button><Link to={Module.key}>下一章</Link> </Button>
            </div>
        }></Alert>
    </div >
}

export default MenuItem;