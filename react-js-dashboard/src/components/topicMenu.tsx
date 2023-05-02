import React from "react";
import { Menu } from "antd";
import "../assets/css/sideBar.css";


type tpc = {
  name: string,
  container: any,
  icon: JSX.Element
}

type Props = {
  topics: tpc[],
  selectedKey : string,
  changeSelectedKey : any
}

const TopicMenu = ({ topics, selectedKey, changeSelectedKey }: Props) => {
  const styledTopics: JSX.Element[] = [];

  topics.forEach((topic, index) =>

    styledTopics.push(
    <Menu.Item key={index} onClick={changeSelectedKey} className="MenuItems" >
        {topic.name}
        {topic.icon}
      </Menu.Item>
    )
  );

  return (
    <Menu mode="inline" selectedKeys={[selectedKey]} >
      {styledTopics}
    </Menu>
  )
}


export default TopicMenu