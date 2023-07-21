import React from "react";
import { Layout, theme, Menu, MenuProps } from "antd";

import Welcome from './Welcome/_Menu'
import Introduction from './Introduction/_Menu'
import Discover from './Discover/_Menu'
import Research from './Research/_Menu'
import { Header } from "antd/es/layout/layout";

const { Sider } = Layout;

const Home: React.FC = () => {
  // const dataSource = [
  //   <a href="https://wwzc.lanzouj.com/iXO65129dx0j">COMMod 刻晴-霓裾翩跹 1.1版</a>,
  //   <a href="https://wwzc.lanzouj.com/iD60f129dwxg">COMMod 妮露 1.1版</a>,
  //   <a href="https://wwzc.lanzouj.com/iWWA812odqpc">COMMod 宵宫 1.0版</a>,
  // ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems: MenuProps['items'] = [
    Welcome,
    Introduction,
    Discover,
    Research
  ]

  return (

    <Layout>
      <Sider>
        <Header>
        </Header>
        <Menu
          mode="inline"
          items={menuItems} />
      </Sider>
      <Layout>
        <Header style={{ background: colorBgContainer }}>

        </Header>
      </Layout>
    </Layout>
  )

  // <Layout>
  //   <Header>header</Header>
  //   <Layout>
  //     <Sider>left sidebar</Sider>
  //     <Content>main content</Content>
  //     <Sider>right sidebar</Sider>
  //   </Layout>
  //   <Footer>footer</Footer>
  // </Layout>

  //   <Layout>
  //   <Header style={{ display: 'flex', alignItems: 'center' }}>
  //     <Typography.Paragraph type="danger">本站正在开发中，现在是毛胚房状态＞﹏＜</Typography.Paragraph>
  //   </Header>
  //   <Content>
  //     <Typography.Title>欢迎来到COM3D2开放资源站</Typography.Title>
  //     <Typography.Paragraph>
  //       这是一个用于分享COM3D2资源的网站，秉着开放的精神，所有资源均为无套路的直链下载，并尽可能标记来源，使其有迹可循，举一反三。<br></br>
  //       主要分享内容为Mod，Mod来源于网络收集和网络投稿，其余内容基本为信息转载，也即不直接存储数据，仅负责缩减信息差。<br></br>
  //       本站将遵守法律规定，不应出现色情暴力侵权等行为，但数据量巨大不一定能完全审核，违规内容可联系站长做下架处理。<br></br>
  //     </Typography.Paragraph>

  //     <Space direction="vertical" style={{ width: '100%' }}>
  //       <Button type="primary" block><Link to="/Game">游戏(本体与DLC)</Link></Button>
  //       <Button type="primary" block><Link to="/Plugin">插件(含汉化)</Link></Button>
  //       <Button type="primary" block><Link to="/Module">模组(Mod)</Link></Button>
  //     </Space>
  //   </Content>
  //   <Footer>
  //     <Typography.Title level={3} type="success">我知道大伙从哪来的，所以还是预留一下直链吧。</Typography.Title>
  //     <List>
  //       <Space>
  //         {dataSource.map(item => <List.Item><Button>{item}</Button></List.Item>)}
  //       </Space>
  //     </List>
  //   </Footer >
  // </Layout >
};

export default Home;
