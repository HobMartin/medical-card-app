import React from "react";
import { Layout, Breadcrumb } from "antd";
import "../Layout.css";

const ContentLayout = (props: any) => {
  const { Content } = Layout;

  return (
    <>
      <Content className="content-layout">
        <Breadcrumb className="breadcrumb-layout">
          <Breadcrumb.Item>Пацієнт</Breadcrumb.Item>
          <Breadcrumb.Item>Шевчук Ігор Миколайович</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-main">
          <main>{props.children}</main>
        </div>
      </Content>
    </>
  );
};

export default ContentLayout;
