import { Button, Card, Col, Form, Input, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react'

type Props = {}

const login = (props: Props) => {
  return (
    <Card title="Login" size="small" bordered={true} >
      <Row justify="space-around" align="middle">
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} >
          <Form name="formLogin" layout="vertical" >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!'}]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col >
      </Row>
    </Card >
  )
}

export default login