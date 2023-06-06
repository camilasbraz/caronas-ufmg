import React from "react";
import { Outlet, Link } from "react-router-dom";

import { Breadcrumb, Layout as LayoutAntd, Typography, theme } from "antd";

const { Title } = Typography;

const { Header, Content, Footer } = LayoutAntd;

const Layout = () => {
  return (
    <LayoutAntd className="layout" style={{ "min-height": "100vh" }}>
      <Header>
        <Title level={3} style={{ color: "white" }}>
          UFMG CARONAS
        </Title>
      </Header>
      <Content style={{ padding: "50px 50px" }}>
        <Outlet />
      </Content>
    </LayoutAntd>
  );
};

export default Layout;
