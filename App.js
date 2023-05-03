import { Form, Input, Button, DatePicker, Select } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
const { Option } = Select;

const App = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>ABC Bank</h1>
      <Form
        name="loginForm"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        style={{ maxWidth: 300, margin: '0 auto' }}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};


export default App;
