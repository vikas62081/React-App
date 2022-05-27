import React from "react";
import { Link } from "react-router-dom";
import CustomTable from "./Table";

const Dashboard = () => {
  return (
    <>
      {/* <h2>Dashboard</h2> */}
      <CustomTable />
      <Link to="/about">Go to About component</Link>
    </>
  );
};

export default Dashboard;
