import React, { useEffect } from 'react'
import { Button, Card, Col, Form, Input, Row, Select, message } from 'antd'
import { Connect } from '../services/gRPCConnect';
import { IData } from '../models/Iresponse';
import { useNavigate } from 'react-router-dom';

type Props = {
    updateSet  (str : string): void
}

function EditInformation({updateSet}: Props) {

    const [formEdit] = Form.useForm();

    const { Option } = Select;

    const [data, setData] = React.useState<IData>();

    let connection = new Connect();

    useEffect((): void => {
        setData(connection.GetData());
    }, [])

    useEffect(() => formEdit.resetFields(), [data]);



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


    const update = async (e: IData) => {
        let { response } = await connection.UserUpdate(e);
        if (response.ok) {
            let { response } = await connection.Login(e.email, e.password);
            if (response.resultStat!.ok) {
                connection.AddToken(response.authResult!.accessToken);
                connection.AddData(response.data!);
            }
            updateSet("updated");
            successMessage("User Info Updated");
            setTimeout(()=>window.location.reload(), 2000);
        }
        else {
            errorMessage("Can Not Update User With This Values");
        }
    }

    const onClick = () => {

        formEdit.validateFields().then(
            () => {
                let tmp = formEdit.getFieldsValue(true);
                update(tmp);
            }
        )
    }

    return (
        <>
            <Card title="Edit User Info" size="small" bordered={true} >
                <Row justify="space-around" align="middle">
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} >
                        <Form name="formLogin" form={formEdit} >
                            <Form.Item
                                name="name"
                                label="Name"
                                initialValue={data?.name}
                                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="lastName"
                                label="Last Name"
                                initialValue={data?.lastName}
                                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="gender"
                                label="Gender"
                                initialValue={data?.isFemale ? "Female" : "Male"}
                                rules={[{ required: true, message: 'Please select gender!' }]}
                            >
                                <Select placeholder="select your gender">
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="address"
                                label="Address"
                                initialValue={data?.address}
                                rules={[{ required: true, message: 'Please input Address' }]}
                            >
                                <Input.TextArea showCount maxLength={100} />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="E-mail"
                                initialValue={data?.email}
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" onClick={onClick}>
                                    Edit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col >
                </Row>
            </Card >
        </>
    )
}

export default EditInformation