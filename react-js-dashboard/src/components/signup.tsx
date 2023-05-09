import { Button, Card, Col, Form, Input, Row, Select, message } from 'antd'
import React from 'react'
import { Connect } from '../services/gRPCConnect';
import { IuserLoginEntry } from '../models/Irequest';
import { IData, IDataForm } from '../models/Iresponse';
import { useNavigate } from 'react-router-dom';

type Props = {
    updateSet  (str : string): void
}

function Signup({updateSet}: Props) {

    const { Option } = Select;

    const [formSignup] = Form.useForm();

    let connection = new Connect();

    const errorMessage = (msg: string) => {
        message.open({
            type: 'error',
            content: msg,
            duration: 3
        });
    };

    const successMessage = (msg: string) => {
        message.open({
            type: 'success',
            content: msg,
            duration: 2
        });
    };

    const AddUser = async (e: IData) => {
        console.log(e);
        let { response } = await connection.AddUser(e);
        if (response.resultStat?.ok) {
            connection.AddToken(response.authResult!.accessToken);
            connection.AddData(response.data!);
            successMessage("Signup Succesfull, Wellcome " +
                response.data?.name + " " +
                response.data?.lastName);
            updateSet("updated");
            setTimeout(()=>window.location.reload(), 2000);
            formSignup.resetFields();
        }
        else {
            errorMessage("Email or Password Incorrect.");
            formSignup.resetFields();
        }
    }

    const onClick = () => {

        formSignup.validateFields().then(
            () => {
                let tmp = formSignup.getFieldsValue(true);
                AddUser(tmp);
            }
        )
    }

    return (

        <>
            <Card title="Signup" size="small" bordered={true} >
                <Row justify="space-around" align="middle">
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} >
                        <Form name="formLogin" form={formSignup} >
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="lastName"
                                label="Last Name"
                                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="isFemale"
                                label="Gender"
                                rules={[{ required: true, message: 'Please select gender!' }]}
                            >
                                <Select placeholder="select your gender">
                                    <Option value={false}>Male</Option>
                                    <Option value={true}>Female</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="address"
                                label="Address"
                                rules={[{ required: true, message: 'Please input Address' }]}
                            >
                                <Input.TextArea showCount maxLength={100} />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="E-mail"
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
                                    Signup
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col >
                </Row>
            </Card >
        </>
    )
}

export default Signup