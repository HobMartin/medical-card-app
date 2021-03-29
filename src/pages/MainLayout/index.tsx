//TODO create layout for APP

import React from "react";
import { Layout } from "antd";
import LeftMenu from "./LeftMenu";
import ContentLayout from "./ContentLayout";
import HeaderLayout from "./HeaderLayout";
import "./Layout.css";

const { Footer } = Layout;

function MainLayout(props: any) {
  return (
    <>
      <Layout className="layout">
        <LeftMenu />
        <Layout className="site-layout">
          <HeaderLayout />
          <ContentLayout>{props.children}</ContentLayout>
          <Footer className="footer">
            Ivan Derda ©2020 Created by Ivan Derda
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default MainLayout;
