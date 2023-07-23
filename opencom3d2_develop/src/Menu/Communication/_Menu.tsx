import { ShareAltOutlined } from "@ant-design/icons";
import Contact from "./Contact"
import Purpose from "./Purpose"

const Menu = {
    key: '/Communication',
    label: "沟通",
    icon: <ShareAltOutlined />,
    children: [
        Contact,
        Purpose
    ]
}
export default Menu;