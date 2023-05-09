import React, { useEffect } from 'react'
import Signup from '../components/signup'
import { Layout,Tabs } from 'antd'
import Login from '../components/login'
import '../assets/css/homePage.css'
import { useNavigate } from 'react-router-dom'
import { Connect } from '../services/gRPCConnect'
type Props = {}

const HomePage = (props: Props) => {

    const [update, setUpdate] = React.useState<string>("");


    const updateSet = (str : string): void => {
        setUpdate(str);
    }

    const navigate = useNavigate();

    useEffect((): void => {
        let connection = new Connect();
        if (connection.CheckLogin() === "login") {
            navigate('/dashboard');
        }
    }, [update])

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
                                children: <Signup updateSet={updateSet} />,
                            },
                            {
                                label: 'Login',
                                key: '2',
                                children: <Login updateSet={updateSet} />,
                            },
                        ]}
                    />
                </Content>
            </Layout>
        </>
    )
}

export default HomePage