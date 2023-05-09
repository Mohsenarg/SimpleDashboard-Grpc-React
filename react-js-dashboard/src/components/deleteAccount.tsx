import { Button, Result, Typography, message } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons';
import React from 'react'
import { Connect } from '../services/gRPCConnect';
import { useNavigate } from 'react-router-dom';

type Props = {
    updateSet  (str : string): void
}

const DeleteAccount = ({updateSet}: Props) => {

    const { Paragraph, Text } = Typography;

    let connection = new Connect();

    const errorMessage = (msg: string) => {
        message.open({
            type: 'error',
            content: msg,
            duration: 2
        });
    };

    const successMessage = (msg: string) => {
        message.open({
            type: 'success',
            content: msg,
            duration: 3
        });
    };

    const userDelete = async () => {
        let { response } = await connection.UserDelete();
        if (response.ok) {
            connection.Logout();
            successMessage("Delete Account Success Full");
            setTimeout(()=>window.location.reload(), 2000);
        }
        else {
            errorMessage("Can Not delete User");
        }
    }

    return (
        <>
            <Result
            status={'error'}
                title="Are You Sure?"
                subTitle="Please check and modify the following information before resubmitting."
                extra={
                    <Button type="primary" key="console" onClick={userDelete}>
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