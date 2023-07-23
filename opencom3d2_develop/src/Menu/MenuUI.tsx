import React from "react";
import { Layout, theme, Menu, Button, message, MenuProps } from "antd";
import { useLocation, Route } from "react-router-dom";

import * as MenuSystem from "./MenuSystem";
import Welcome from './Welcome/_Menu'
import Introduction from './Introduction/_Menu'
import Research from './Research/_Menu'
import Communication from './Communication/_Menu'
import Discover from './Discover/_Menu'



const Menus: React.FC = () => {
  //初始化
  const { token } = theme.useToken();
  const { pathname } = useLocation()
  const [messageApi, contextHolder] = message.useMessage();
  MenuSystem.SetMessageApi(messageApi);
  //统计菜单
  const menus: MenuProps['items'] = [
    Welcome,
    { type: 'divider' },
    Introduction,
    { type: 'divider' },
    Discover,
    { type: 'divider' },
    Research,
    { type: 'divider' },
    Communication,
    { type: 'divider' },
  ]
  //生成菜单功能
  for (let menu of menus) {
    MenuSystem.TryActionLinkAble(menu);

    //遍历子菜单项
    let { children } = menu as { children: any[] };
    if (children !== undefined) {
      for (let menuItem of children) {
        MenuSystem.TryActionLinkAble(menuItem);
      }
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 侧边导航栏 */}
      <Layout.Sider collapsible >
        <Layout.Header style={{ margin: "4", padding: '0px 16px' }}>
          <Button type="primary" style={{ pointerEvents: "none" }} block ghost ><div style={{ overflow: "hidden", textOverflow: "ellipsis" }}>COM3D2开放资源站</div></Button>
        </Layout.Header>
        <Menu theme="dark"
          mode="inline"
          items={menus}
          selectable={false}
        />
      </Layout.Sider>

      <Layout.Content style={{ display: "flex", flexDirection: "column" }}>
        {/* 页眉工具栏 */}
        <Layout.Header style={{ backgroundColor: token.colorBgContainer }}></Layout.Header>
        {/* 内容区 */}
        <Layout.Content style={{ padding: "24px" }}>
          {contextHolder}{/*弹窗环境*/}
          {
            // 菜单内容
            MenuSystem.HasLinkPath(pathname) &&
            <Route path={pathname} >{() => {
              const Page = MenuSystem.GetLinkPage(pathname)!
              return <Page></Page>
            }}</Route>
          }
        </Layout.Content>
      </Layout.Content>
    </Layout >
  )
};

export default Menus;
