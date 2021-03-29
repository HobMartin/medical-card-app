import React from "react";
import { Layout } from "antd";
import "../Layout.css";
import UserInfoHeader from "../UserInfoHeader";

function HeaderLayout() {
  const { Header } = Layout;

  return (
    <Header className="site-layout-background header">
      <UserInfoHeader />
    </Header>
  );
}

export default HeaderLayout;
