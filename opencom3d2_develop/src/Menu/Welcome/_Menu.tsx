import { Layout, Typography, Space, List, Button, Pagination, Card, Alert } from 'antd';
import { CaretLeftFilled, CaretRightFilled, LeftOutlined, RightOutlined, SmileOutlined } from '@ant-design/icons'
import Log from './UpdateLog';
import { useState } from 'react';
import { GetMessageApi } from '../MenuSystem';

function Page() {
    const [logIndex, setLogIndex] = useState(0)

    function SetLogIndex(index: number) {
        if (index < 0) {
            GetMessageApi().error("肝不动了。");
            index = 0;
        }
        else if (index >= Log.length) {
            GetMessageApi().error("肝不动了。");
            index = Log.length - 1;
        }
        setLogIndex(index)
    }

    const dataSource = [
        <a href="https://wwzc.lanzouj.com/iXO65129dx0j">COMMod 刻晴-霓裾翩跹 1.1版</a>,
        <a href="https://wwzc.lanzouj.com/iD60f129dwxg">COMMod 妮露 1.1版</a>,
        <a href="https://wwzc.lanzouj.com/iWWA812odqpc">COMMod 宵宫 1.0版</a>,
    ];

    return <div>
        <Layout style={{
            // backgroundImage: "linear-gradient(140deg,white, rgba(0, 0, 0,0.5) ),url(./Welcome.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center left"
        }}>
            <Layout.Header style={{ display: "flex", alignItems: "center" }}>
                <Typography.Paragraph type="danger" style={{ margin: "0" }}>本站正在开发中，现在是简装房阶段＞﹏＜</Typography.Paragraph>
            </Layout.Header>

            <Layout.Content style={{ padding: 24, minHeight: '530px', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                    <Typography.Title>欢迎来到COM3D2开放资源站</Typography.Title>
                    <Typography.Paragraph>
                        这是一个用于分享COM3D2资源和教程的网站，开源精神是本站的主导思想，优化环境是本站的最终目标。
                    </Typography.Paragraph>
                    <Space direction="vertical">
                        <div><Typography.Text keyboard>新玩家？</Typography.Text>：请查阅<Typography.Text strong>入门分栏</Typography.Text>，获取基本的游戏内容并配置。</div>
                        <div><Typography.Text keyboard>老玩家？</Typography.Text>：请查阅<Typography.Text strong>发现分栏</Typography.Text>，尝试扩充增强你的游戏内容。</div>
                        <div><Typography.Text keyboard>开发者？</Typography.Text>：请查阅<Typography.Text strong>研究分栏</Typography.Text>，创造独属于自己的游戏扩展。</div>
                    </Space>
                </div>
                <Card bordered={false} style={{ width: "500px", background: "rgba(0,0,0,0.2)" }}
                    title="更新日志"
                    extra={
                        <Space>
                            <Button icon={<LeftOutlined />} onClick={() => SetLogIndex(logIndex - 1)}></Button>
                            <Button icon={<RightOutlined />} onClick={() => SetLogIndex(logIndex + 1)}></Button>
                        </Space>
                    }
                    children={
                        <div>
                            <Typography.Text keyboard>{Log[logIndex].time}</Typography.Text>
                            {Log[logIndex].content}
                        </div>
                    }
                />
            </Layout.Content>
        </Layout>
        <br />
        <List
            header={<Typography.Title level={3} type="success">我知道大伙从哪来的，建站期间还是预留一下直链吧。</Typography.Title>}
            bordered
            dataSource={dataSource}
            renderItem={item => <List.Item><Button>{item}</Button></List.Item>}
        />
    </div >
}

const Menu = {
    label: "欢迎",
    icon: <SmileOutlined />,
    key: '/',
    page: Page
}
export default Menu;