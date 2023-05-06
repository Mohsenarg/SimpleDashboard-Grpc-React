import { Descriptions } from 'antd'
import React, { useEffect } from 'react'
import { Connect } from '../services/gRPCConnect'
import { IData } from '../models/Iresponse'

type Props = {}

const UserInfo = (props: Props) => {
    const [data , setData]= React.useState<IData>()

    useEffect((): void => {
        let connection = new Connect();
        setData(connection.GetData());
    }, [])

    return (
        <>
            <Descriptions title="User Info" bordered>
                <Descriptions.Item label="Name">{data?.name}</Descriptions.Item>
                <Descriptions.Item label="Last Name">{data?.lastName}</Descriptions.Item>
                <Descriptions.Item label="Gender">{data?.isFemale?"Female":"Male"}</Descriptions.Item>
                <Descriptions.Item label="Address">
                {data?.address}
                </Descriptions.Item>
                <Descriptions.Item label="Email">{data?.email}</Descriptions.Item>
            </Descriptions>
        </>
    )
}

export default UserInfo