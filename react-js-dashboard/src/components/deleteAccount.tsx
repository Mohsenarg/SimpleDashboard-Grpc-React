import { Button, Result, Typography } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons';
import React from 'react'

type Props = {}

const DeleteAccount = (props: Props) => {

    const { Paragraph, Text } = Typography;

    return (
        <>
            <Result
            status={'error'}
                title="Are You Sure?"
                subTitle="Please check and modify the following information before resubmitting."
                extra={
                    <Button type="primary" key="console">
                        Delete Account
                    </Button>
                    }
            >
                <div>
                    <Paragraph>
                        <Text
                            strong
                            style={{
                                fontSize: 16,
                            }}
                        >
                            This Procedure Will Delete Your Account By Pressing Button :
                        </Text>
                    </Paragraph>
                    <Paragraph>
                        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account will delete
                        from <a> database &gt;</a>
                    </Paragraph>
                </div>
            </Result>
        </>
    )
}

export default DeleteAccount