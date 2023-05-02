import React, { useState, useEffect, useRef } from 'react';
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "../assets/css/navBar.css";


type Props = {
  menu: any,
  navH : (heightNav: number) => void
}

const NavBar = ({menu,navH}: Props) => {
  const [visible, setVisible] = useState<boolean>(false);

  const ref  = useRef<HTMLElement>(null);

  useEffect(() : void  => {
    if (null !== ref.current) {
     
        navH(ref.current.clientHeight);
 
    }
  }, [])

  const handleResize = () : void => {
    if (null !== ref.current) {
     
      navH(ref.current.clientHeight);

  }
  }

  window.addEventListener('resize', handleResize)

  return (
    <>
      <nav className="navbar" ref={ref} >
        <Button
          className="menu"
          type="primary"
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
        />
        <Drawer
          title="Menu"
          placement="left"
          onClose={() => setVisible(false)}
          visible={visible}
        >
          {menu}
        </Drawer>
        <a href="/"><img  className='logo' ></img><h3>User Management</h3></a>
      </nav>
    </>
  )
}


export default NavBar
