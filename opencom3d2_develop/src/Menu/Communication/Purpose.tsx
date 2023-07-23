import { Collapse, CollapseProps, Typography, Space } from 'antd'

const MenuItem = {
    label: "建站宗旨",
    key: "/Communication/Purpose",
    page: () => {

        const items: CollapseProps['items'] = [
            {
                key: '1',
                label: "目前本站只是一本有关COM3D2的说明书，我会尽力按以下几点要求自己。",
                children: <Space direction="vertical">
                    <div><Typography.Text keyboard>只有直链</Typography.Text>：这里不需要加群，兑换，交易等任何多余条件，所有链接都是直取直达。</div>
                    <div><Typography.Text keyboard>标记源头</Typography.Text>：所有东西尽可能标记来源，并以源头链接为准，非必要不做中间商行为。</div>
                    <div><Typography.Text keyboard>没有捆绑</Typography.Text>：提供的资源尽可能原子化，不绑定下载软件，密码，多余文件等，简单干净不臃肿。</div>
                    <div><Typography.Text keyboard>无信息差</Typography.Text>：分享教程或整合资源应与编写论文相同，要尽可能记录出处，使其有迹可循，以便举一反三。</div>
                    <div><Typography.Text keyboard>遵守法律</Typography.Text>：本站不应出现色情暴力资源或侵权行为等，但数据量巨大不一定能完全审核，违规内容请联系站长，审核无误后将急速下架。</div>
                </Space>
            }
        ]

        return <div>
            <Typography.Title>建站宗旨</Typography.Title>
            <Typography.Paragraph>
                我的终极目标是希望建立一个github版的zod论坛，但那是不可能的，这个网站终究只是一个个人网站，一个寿命短暂的网站。
            </Typography.Paragraph>
            <Collapse
                items={items} />
        </div>
    }
}

export default MenuItem;