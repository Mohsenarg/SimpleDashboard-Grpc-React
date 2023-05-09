import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import TopicMenu from "../components/topicMenu";
import NavBar from "../components/navBar";
import SideBar from "../components/layoutSider";
import '../assets/css/dashBoard.css';


import {
    EditOutlined,
    DeleteOutlined,
    UserOutlined,
} from '@ant-design/icons';
import DeleteAccount from "../components/deleteAccount";
import UserInfo from "../components/userInfo";
import EditInformation from "../components/editInformation";
import { Connect } from "../services/gRPCConnect";
import { useNavigate } from "react-router-dom";


type tpc = {
    name: string,
    container: any,
    icon: JSX.Element
}

type Props = {}


const DashBoard = (props: Props) => {

    const navigate = useNavigate();
    

    const [update, setUpdate] = React.useState<string>("");


    const updateSet = (str : string): void => {
        setUpdate(str);
    }

    useEffect((): void => {
        let connection = new Connect();
        if (connection.CheckLogin() === "notlogin") {
            navigate('/');
        }
    }, [update])

    const icons = [<UserOutlined />, <EditOutlined />, <DeleteOutlined />]
    const deleteAccount = (
        <DeleteAccount updateSet={updateSet} />
    )
    const userInfo = (
        <UserInfo updated={update} />
    )
    const editInformation = (
        <EditInformation updateSet={updateSet} />
    )

    const topic: tpc[] = [
        { name: "User Info", container: userInfo, icon: icons[0] }
        , { name: "Edit User", container: editInformation, icon: icons[1] }
        , { name: "Delete User", container: deleteAccount, icon: icons[2] }
    ];

    const [contentIndex, setContentIndex] = useState<number>(0);

    const [selectedKey, setSelectedKey] = useState<string>('0');

    const [totalHeight, setTotalHeight] = useState<number>(0);

    const changeSelectedKey = (event: any): void => {
        const key: number = event.key;
        setSelectedKey(key.toString());
        setContentIndex(+key);
    };

    const setHeight = (heightNav: number): void => {
        setTotalHeight(document.documentElement.offsetHeight - heightNav);
    }

    const Menu = (
        <TopicMenu
            topics={topic}
            selectedKey={selectedKey}
            changeSelectedKey={changeSelectedKey}
        />
    );

    return (
        <div className="App">
            <NavBar menu={Menu} navH={setHeight} updateSet={updateSet} />
            <Layout>
                <SideBar menu={Menu} initHeight={totalHeight} />
                <Layout.Content className="ctndb">
                    {topic[contentIndex].container}
                </Layout.Content>
            </Layout>
        </div>
    )
}

export default DashBoard