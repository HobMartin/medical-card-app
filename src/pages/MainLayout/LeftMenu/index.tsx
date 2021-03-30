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
import { NavLink } from "react-router-dom";

function LeftMenu() {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Menu theme="dark" mode="inline">
        <div className="logo">
          <Menu.Item key="0">
            <NavLink to="/" exact={true}>
              <img
                alt="logo"
                src="https://img.icons8.com/dotty/80/000000/medical-mobile-app.png"
              />
            </NavLink>
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
          <NavLink to="/patientlist" exact={true}>
            Список пацієнтів
          </NavLink>
        </Menu.Item>

        <Menu.Item key="5" icon={<UsergroupAddOutlined />}>
          Список лікарів
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default LeftMenu;
