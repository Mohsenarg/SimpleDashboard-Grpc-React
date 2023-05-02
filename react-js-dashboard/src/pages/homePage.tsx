import React from 'react'
import Signup from '../components/signup'
import { Layout, Space, Tabs } from 'antd'
import Login from '../components/login'
import '../assets/css/homePage.css'
type Props = {}

const HomePage = (props: Props) => {

    const { Content } = Layout;

    return (
        <>
            <Layout className='ctn'>
                <Content>
                    <Tabs
                        defaultActiveKey="1"
                        items={[
                            {
                                label: 'Signup',
                                key: '1',
                                children: <Signup />,
                            },
                            {
                                label: 'Login',
                                key: '2',
                                children: <Login />,
                            },
                        ]}
                    />
                </Content>
            </Layout>
        </>
    )
}

export default HomePage