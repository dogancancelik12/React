import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import { UserAddOutlined, MailOutlined } from '@ant-design/icons';
import { ProfessionIterator } from './Profession';
import { SkilssIterator } from './Skill';

const button_style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
export const FreelancerForm = ({ onFinish }) => {
  return (
    <>
      <hr />
      <br />
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        size="default"
        name="dynamic_form_item"
        onFinish={onFinish}
      >
        <Form.Item name="fullname" label="Full Name" rules={[{ required: true, message: 'Please enter fullname!' }]}>
          <Input type="text" prefix={<UserAddOutlined />} />
        </Form.Item>
        <Form.Item name="displayName" label="User Name" rules={[{ required: true, message: 'Please enter username!' }]}>
          <Input type="text" prefix={<UserAddOutlined />} />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter email!' }]}>
          <Input type="email" prefix={<MailOutlined />} />
        </Form.Item>
        <Form.Item name="birthDate" label="Birthday">
          <DatePicker />
        </Form.Item>
        <Form.Item name="bio" label="Bio">
          <Input.TextArea />
        </Form.Item>
        <ProfessionIterator />
        <SkilssIterator />
        <Form.Item style={button_style}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
