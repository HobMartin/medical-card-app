import React from "react";
import { Badge, Avatar, Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../Layout.css";

function UserInfoHeader() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <span>Переглянути профіль</span>
      </Menu.Item>
      <Menu.Item key="0">
        <span>Моя карта</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="0">
        <span>Вийти</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="user-avatar">
      <span>Дудол Василь Петрович</span>
      <Dropdown placement="bottomRight" overlay={menu} trigger={["click"]}>
        <Badge count={1}>
          <Avatar
            className="avatar"
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
