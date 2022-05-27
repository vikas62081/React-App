import { Breadcrumb, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import AppHeader from "../components/AppHeader";

import "./layout.css";
const { Header, Content, Footer } = Layout;

const App = ({ children }) => (
  <Layout className="layout" style={{ height: "100vh" }}>
    <AppHeader />
    <Content
      style={{
        padding: "0 50px",
      }}
    >
      <div className="site-layout-content">{children}</div>
    </Content>
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      codenemy ©2018 Created by Vikas
    </Footer>
  </Layout>
);

export default App;
