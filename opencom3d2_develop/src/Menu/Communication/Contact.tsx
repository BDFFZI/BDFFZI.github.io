import { Descriptions, Typography } from 'antd'
import { List } from 'antd/es/form/Form'

const MenuItem = {
    label: "联系我们",
    key: "/Communiction/Contact",
    page: () => {
        return <div>
            <Typography.Title>联系我们</Typography.Title>
            <Descriptions title="联系方式" bordered column={1}>
                <Descriptions.Item label='Bilibili（主要发布源，以及观看视频内容）'>BDFFZI</Descriptions.Item>
                <Descriptions.Item label='Github（所有项目均开源，欢迎技术反馈或贡献）'>https://github.com/BDFFZI</Descriptions.Item>
                <Descriptions.Item label='QQ群（用于解决常规问题）'>821799499</Descriptions.Item>
            </Descriptions>
            <br />
            <Descriptions title="友情链接" bordered column={1} layout='vertical'>
                <Descriptions.Item label={
                    <div>隔壁up主zaj2001的QQ群，感谢各位大佬对我一路的帮助。（这是国内主流版本，老牌千人群，有关游戏的获取和提问我都建议直接进这个群）
                    </div>
                }>887895489</Descriptions.Item>
            </Descriptions>
        </div >
    }
}

export default MenuItem