import React from "react";
import { Badge, Avatar, Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../Layout.css";

function UserInfoHeader() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">Переглянути профіль</a>
      </Menu.Item>
      <Menu.Item key="0">
        <a href="#">Моя карта</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="0">
        <a href="#">Вийти</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="user-avatar">
      <span>Дудол Василь Петрович</span>
      <Dropdown placement="bottomRight" overlay={menu} trigger={["click"]}>
        <Badge count={1}>
          <Avatar
            size={32}
            icon={<UserOutlined />}
            // src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </Badge>
      </Dropdown>
    </div>
  );
}

export default UserInfoHeader;
