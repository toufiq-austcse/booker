import { Button, Form, Input } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth.jsx';

export function LoginForm() {
  const { login } = useAuth();
  const history = useHistory();

  const onFinish = async (values) => {
    try {
      const res = await login(values.email, values.password);
      console.log('Success:', res);
      history.push('/');

    } catch (e) {
      console.log(e);
      alert('error in login');
    }

  };
  return (
    <Form
      name='basic'
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item
        label='Email'
        name='email'
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Button type='primary' htmlType='submit'>
          Login
        </Button>
      </Form.Item>
      Or <Link to='/signup'>SignUp now!</Link>
    </Form>
  );
}