import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((item, idx) => (
          item.has_dropdown === true ? (
          <li key={idx} className="has-dropdown">
            <Link href={item.link}>{item.title}</Link>
            <ul className="submenu">
              {item.sub_menus.map((sub, i) => (
                <li key={i}>
                  <Link href={sub.link}>{sub.title}</Link>
                </li>
              ))}
            </ul>
          </li>
          ) : (
          <li key={idx}>
            <Link href={item.link}>{item.title}</Link>
          </li>
          )
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
