import { ImportOutlined } from "@ant-design/icons";
import Game from "./Game"
import Plugin from "./Plugin"
import Module from "./Module"

const Menu = {
    key: '/Introduction',
    label: '入门',
    icon: <ImportOutlined />,
    children: [
        Game,
        Plugin,
        Module
    ]
}
export default Menu;