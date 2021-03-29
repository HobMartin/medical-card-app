import React from "react";
import { Layout, Popover, Badge, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../Layout.css";

function HeaderLayout() {
  const { Header } = Layout;
  const text = <span>Дудол Василь Петрович</span>;
  const content = (
    <div className="pop-content">
      <p>Перглянути профіль</p>
      <p>Моя карта</p>
      <hr></hr>
      <p>Вийти</p>
    </div>
  );
  return (
    <Header className="site-layout-background header">
      <div className="user-avatar">
        <span>Дудол Василь Петрович</span>
        <Popover
          placement="bottomRight"
          title={text}
          content={content}
          trigger="click"
        >
          <Badge count={1}>
            <Avatar
              size={32}
              icon={<UserOutlined />}
              // src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </Badge>
        </Popover>
      </div>
    </Header>
  );
}

export default HeaderLayout;
