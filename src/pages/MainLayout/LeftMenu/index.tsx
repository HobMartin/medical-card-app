import React, { useState } from "react";
import { Menu, Layout } from "antd";
import {
  IdcardOutlined,
  ContactsOutlined,
  CalendarOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import "../Layout.css";

function LeftMenu() {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <div className="logo">
          <Menu.Item key="0">
            <img
              alt="logo"
              src="https://img.icons8.com/dotty/80/000000/medical-mobile-app.png"
            />
          </Menu.Item>
        </div>
        <Menu.Item key="1" icon={<IdcardOutlined />}>
          Медична карта
        </Menu.Item>
        <Menu.Item key="2" icon={<ContactsOutlined />}>
          Записи на сьогодні
        </Menu.Item>
        <Menu.Item key="3" icon={<CalendarOutlined />}>
          Календар
        </Menu.Item>
        <Menu.Item key="4" icon={<TeamOutlined />}>
          Список пацієнтів
        </Menu.Item>
        <Menu.Item key="5" icon={<UsergroupAddOutlined />}>
          Список лікарів
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default LeftMenu;
