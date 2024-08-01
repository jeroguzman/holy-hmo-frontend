import Link from "next/link";
import React from "react";
import MobileMenus from "./mobile-menus";

const Sidebar = ({ isActive, setIsActive }) => {
  return (
    <>
      <div className={`tp-sidebar-menu ${isActive ? "sidebar-opened" : ""}`}>
        <button className="sidebar-close" onClick={() => setIsActive(false)}>
          <i className="icon_close"></i>
        </button>
        <div className="side-logo mb-30">
          <Link href="/">
            <img src="/assets/img/logo/logo.png" alt="logo" style={{width: 300}} />
          </Link>
        </div>
        <div className="mobile-menu mean-container">
            <MobileMenus />
        </div>
      </div>
      <div className={`body-overlay ${isActive ? "opened" : ""} `} onClick={() => setIsActive(false)}></div>
    </>
  );
};
export default Sidebar;
