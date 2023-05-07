import React from 'react'
import { Button, Card, Col, Form, Input, Row, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Connect } from "../services/gRPCConnect";
import { IuserLoginEntry } from "../models/Irequest";



type Props = {}

const Login = (props: Props) => {
  const [formLogin] = Form.useForm();
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
      duration: 3
    });
  };

  const login = async (e: IuserLoginEntry) => {
    let { response } = await connection.Login(e.Email, e.Password);
    if (response.resultStat!.ok) {
      connection.AddToken(response.authResult!.accessToken);
      connection.AddData(response.data!);
      successMessage("login Succesfull, Wellcome " +
        response.data?.name + " " +
        response.data?.lastName);
        window.location.reload();
    }
    else {
      errorMessage("Email or Password Incorrect.");
    }
  }

  const onClick = () => {

    formLogin.validateFields().then(
      () => {
        let tmp = formLogin.getFieldsValue(true);
        formLogin.resetFields();
        login(tmp);
      }
    )
  }

  return (
    <Card title="Login" size="small" bordered={true} >
      <Row justify="space-around" align="middle">
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} >
          <Form name="formLogin" layout="vertical" form={formLogin} >
            <Form.Item
              name="Email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="Password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="Password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" onClick={onClick}>
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col >
      </Row>
    </Card >
  )
}

export default Login