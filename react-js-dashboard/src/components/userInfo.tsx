import { Descriptions } from 'antd'
import React from 'react'

type Props = {}

const UserInfo = (props: Props) => {
    return (
        <>
            <Descriptions title="User Info" bordered>
                <Descriptions.Item label="Name">Zhou Maomao</Descriptions.Item>
                <Descriptions.Item label="Last Name">1810000000</Descriptions.Item>
                <Descriptions.Item label="Gender">Hangzhou, Zhejiang</Descriptions.Item>
                <Descriptions.Item label="Address">
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Descriptions.Item>
                <Descriptions.Item label="Email">empty</Descriptions.Item>
            </Descriptions>
        </>
    )
}

export default UserInfo