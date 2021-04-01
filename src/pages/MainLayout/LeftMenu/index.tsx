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
import { NavLink, withRouter } from "react-router-dom";
import Logo from "./logo";

function LeftMenu(props: any) {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };
  const { location } = props;
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["/"]}
        selectedKeys={[location.pathname]}
      >
        <div className="logo">
          <Menu.Item key="/">
            <NavLink to="/" exact={true}>
              <Logo />
            </NavLink>
          </Menu.Item>
        </div>
        <Menu.Item key="1" icon={<IdcardOutlined />}>
          Медична карта
        </Menu.Item>
        <Menu.Item key="/visitstoday" icon={<ContactsOutlined />}>
          <NavLink to="/visitstoday" exact={true}>
            Записи на сьогодні
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/schedule" icon={<CalendarOutlined />}>
          <NavLink to="/schedule" exact={true}>
            Календар
          </NavLink>
        </Menu.Item>

        <Menu.Item key="/patientlist" icon={<TeamOutlined />}>
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

export default withRouter(LeftMenu);
