import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import Logo from "./../images/logo192.png";
const navOptions = [
  { key: 0, label: <Link to="/">Dashboard</Link> },
  { key: 1, label: <Link to="/product">Product</Link> },
  { key: 2, label: <Link to="/report">Reports</Link> },
  { key: 3, label: <Link to="/about">About</Link> },
  { key: 4, label: <Link to="/contact">Contact Us</Link> },
];
const { Header } = Layout;
const AppHeader = () => {
  return (
    <Header>
      <div className="logo">
        <img width="50px" src={Logo} />
      </div>
      <div className="nav-bar">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["0"]}
          items={navOptions}
        />
      </div>
    </Header>
  );
};

export default AppHeader;
