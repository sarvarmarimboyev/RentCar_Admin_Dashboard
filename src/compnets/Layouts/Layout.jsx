import React from "react";
import Router from "../routes/Router";
import Sidebar from "../Sidebar/Sidebar";
import Topnav from "../TopNav/Topnav";
const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main__layout">
        <Topnav/>
        <div className="content">
          <Router />
        </div>
      </div>
    </div>
  );
};

export default Layout;
