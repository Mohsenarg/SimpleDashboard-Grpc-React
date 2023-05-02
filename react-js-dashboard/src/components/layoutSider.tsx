import React from "react";
import { Layout } from "antd";
import "../assets/css/sideBar.css";

type Props = {
  menu: any,
  initHeight : number
}

const SideBar = ({menu,initHeight}: Props) => {
  const fHeight : string = initHeight + "px";

  return (
    <>
      <Layout.Sider style={{ height: fHeight }}
        className="sidebar Shadow-side"
        breakpoint={"lg"}
        theme="light"
        collapsedWidth={0}
        trigger={null}
      >
        {menu}
      </Layout.Sider>
    </>
  )
}

export default SideBar