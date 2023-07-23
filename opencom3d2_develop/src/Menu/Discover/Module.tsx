import { Button, Space, Typography } from 'antd'

const MenuItem = {
    label: "Mod分享",
    key: '/Discover/Module',
    page: () => {
        const texts1 = [
            { href: "https://wwzc.lanzouj.com/b04k6tasd", text: "一丢丢Mod" },
            { href: "https://wwzc.lanzouj.com/b04k6tawh", text: "一丢丢Mod(未验证)" },
            { href: "https://discord.gg/custommaid", text: "也可以去老外的论坛翻（记得带上爬虫思维，会发现新大陆）" },
        ]

        return <div>
            <Typography.Title>Mod资源分享</Typography.Title>
            <Typography.Paragraph>考虑工作量因素，目前建站期间资源都直接放在了蓝奏云上存储和展示，当然我也在自己电脑上留了备份，但得暂时借用蓝奏云了。</Typography.Paragraph>
            <Space wrap>{texts1.map((item, index) => <Button key={index} href={item.href} target="_blank" rel="noreferrer">{item.text}</Button>)}</Space>

            <Typography.Title level={2}>从哪能找到Mod？</Typography.Title>
            <Typography.Paragraph>
                <ul>
                    <li>推特：源头，大部分作者都会选择在推特发帖</li>
                    <li>论坛：discord，zod，3dm等（推荐）</li>
                    <li>QQ群：一些交流群里会有人分享（如本群大部分未验证mod都来源于QQ群887895489）</li>
                    <li>如果你也有些散装Mod，欢迎联系我投稿╰(￣ω￣ｏ)</li>
                </ul>
            </Typography.Paragraph>
            <Typography.Paragraph>
                如果你想完全白嫖，实际上以上几种方式都不靠谱，首先COM3D2的Mod制作门槛较高，大部分创作者都不愿意分享自己的Mod，因为做Mod对他们来说是一份用于赚钱的工作而非业余爱好，而且国内也游戏环境相当封闭。
                <br />你想要的Mod大多数都是收费的，内部的，所以你很难从公开场合找到Mod。如果你和我一样是圈外人且爱倒弄，我建议直接尝试自己制作，因为这绝对是最靠谱自由度最高的解决办法，而之后我也将发布相关教程。
                <br />COM3D2的Mod制作需要一定的技术要求（Blender，Ps），但不是很高，因为现在网络上有大量的开源模型可供移植，而且如果你只做头发面部，最快一两个小时就能搞定一个Mod，而二次元角色辨识度最高的就是这些，衣服可以不做，因为本身就可以替换。
            </Typography.Paragraph>

            <Typography.Title level={2}>未来规划</Typography.Title>
            <Typography.Paragraph>
                后续会进一步完善，增加预览，投稿等功能，我希望能把找mod变成上淘宝花钱一样简单。
                <br />
                嘛，这游戏也没几个免费做mod的，也没人分享。缺人缺资源，八成是要成自用网站了，只有一个人的图书馆（笑）。
            </Typography.Paragraph>
            <Typography.Title level={2}>版权问题（Copyright problem）</Typography.Title>
            <Typography.Paragraph>
                Mod来源于网络收集和网络投稿，由于数据量过大或原始文件异常等原因，无法挨个审核标记内容，所以部分Mod可能会出现版权问题。
                <br />接着由于网络，文件大小，捆绑等各种因素，导致最终选择了再上传的方式以便资源分享。
                <br />如果你是原作者，而以上内容对您的权益造成了损害，请联系我，我将尽快下架。
                <br />Mod from the network collection and network contributions, due to the amount of data is too large or abnormal original files and other reasons, can not be reviewed one by one marked content, so some Mod may have copyright problems.
                <br /> Then due to the network, file size, bundling and other factors, resulting in the final choice of upload for resource sharing.
                <br /> If you are the original author and the above content has caused damage to your rights and interests, please contact me and I will remove it as soon as possible.
            </Typography.Paragraph>
        </div >
    }
}

export default MenuItem;