import React from "react";
import { Layout } from "antd";
import "../Layout.css";

const ContentLayout = (props: any) => {
  const { Content } = Layout;

  return (
    <>
      <Content className="content-layout">
        <div className="site-layout-main">
          <main>{props.children}</main>
        </div>
      </Content>
    </>
  );
};

export default ContentLayout;
