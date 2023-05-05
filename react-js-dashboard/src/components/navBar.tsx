import React, { useState, useEffect, useRef } from 'react';
import { Drawer, Button } from "antd";
import { MenuOutlined, LogoutOutlined } from "@ant-design/icons";
import "../assets/css/navBar.css";
import { Connect } from '../services/gRPCConnect';
import { useNavigate } from 'react-router-dom';


type Props = {
  menu: any,
  navH : (heightNav: number) => void
}

const NavBar = ({menu,navH}: Props) => {

  const navigate = useNavigate();

  let connection = new Connect();
  
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
  const logout =()=>{
    connection.Logout();
    navigate('/');
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
        <a><h3>User Management</h3></a>
        <a className='logout' onClick={logout}><LogoutOutlined /><h3>Logout</h3></a>
      </nav>
    </>
  )
}


export default NavBar
