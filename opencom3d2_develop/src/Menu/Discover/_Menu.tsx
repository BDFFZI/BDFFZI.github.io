import { LinkOutlined } from "@ant-design/icons";
import Module from "./Module";

const Menu = {
    key: '/Discover',
    label: '发现',
    icon: <LinkOutlined />,
    children: [
        Module
    ]
}

export default Menu;